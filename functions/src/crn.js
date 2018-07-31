/*
  I know this isn't required or whatever but I want to give a little background on what I'm doing in this file. The objective of this is to create a function that takes a string input in the form "12345,67890" and converts those into course objects that can be use to create calendar events (templates in cal.js). This uses promises (I don't know how they work all I know is that they do). The timezone for events is Washington D.C.
*/
"use strict";

var request = require('request');

var weekday = [6, 0, 1, 2, 3, 4, 5];
var weekname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var firstDays = {
  0: new Date(2017, 9, 4),
  1: new Date(2017, 9, 5),
  2: new Date(2017, 8, 30),
  3: new Date(2017, 8, 31),
  4: new Date(2017, 9, 1) //First days of the semester #NEEDS TO BE UPDATED EVERY SEMESTER

};var requestCRN = function requestCRN(string) {
  return new Promise(function (resolve) {
    return request({
      uri: 'https://cors-anywhere.herokuapp.com/https://classy.thecorp.org/search-submit/',
      body: "crn=" + string + "&class_name=&prof_name=&department=&x-list=&reqs=&day_0=on&day_1=on&day_2=on&day_3=on&day_4=on&day_5=on&day_6=on&between_hours=8%3A00+AM+-+11%3A00+PM",
      method: 'POST'
    }, function (error, response, body) {
      body = JSON.parse(body);
      console.log(body);
      if (body.error) {
        resolve({ crn: string, error: true });
      } else {
        var result = body.results[0];
        resolve({ subject: result.sname, courseSection: result.section, professor: result.professor__name, crn: string, error: false });
      }
    });
  });
};

var requestMoreInfo = function requestMoreInfo(object) {
  if (!object.error) {
    return new Promise(function (resolve) {
      return request({
        uri: 'https://cors-anywhere.herokuapp.com/https://classy.thecorp.org/get-event-source/' + object.crn + '/',
        method: 'GET'
      }, function (error, response, body) {
        body = JSON.parse(body);
        if (true) {
          object.timings = [];
          body.forEach(function (value) {
            var startTime = new Date(value.start);
            startTime.setFullYear(firstDays[weekday[new Date(value.start).getDay()]].getFullYear(), firstDays[weekday[new Date(value.start).getDay()]].getMonth(), firstDays[weekday[new Date(value.start).getDay()]].getDate());
            var endTime = new Date(value.end);
            endTime.setFullYear(firstDays[weekday[new Date(value.start).getDay()]].getFullYear(), firstDays[weekday[new Date(value.start).getDay()]].getMonth(), firstDays[weekday[new Date(value.start).getDay()]].getDate());
            var day = weekday[new Date(value.start).getDay()];
            var dayName = weekname[new Date(value.start).getDay()];
            object.timings.push({ day: day, dayName: dayName, courseStartTime: startTime, courseEndTime: endTime });
            resolve(object);
          });
        }
      });
    });
  } else {
    return object;
  }
};

//Expected input to look something like "62818,43216,12345"
var crnString = function crnString(string) {
  //Creating an array of CRN numbers
  string = string.split(',');
  string = string.map(function (curr) {
    return curr.trim();
  });

  //Creating an array of promises
  var crnPromise = string.map(requestCRN);

  //Passing all of those promises
  var results = Promise.all(crnPromise);

  return results;
};

//Retrieves and adds extra information to the array such as times and days of the classes
var crnMoreInfo = function crnMoreInfo(array) {
  var moreInfoPromise = array.map(requestMoreInfo);

  var results = Promise.all(moreInfoPromise);

  return results;
};

exports.getData = function (string) {
  return crnString(string).then(crnMoreInfo);
};