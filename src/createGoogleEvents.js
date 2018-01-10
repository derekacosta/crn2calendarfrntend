import React, { Component } from 'react';
import './App.css';
import './courseList.css';

class ListOfClasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "CLIENTID": "636385055353-3339e71m1t19ik7jnn6q6afv1coplr24.apps.googleusercontent.com",
            "CLIENTSECRET": "c9jUuSNfZqgEbPQq6awA-zdE",
            "APIKEY": "AIzaSyAUw6SKdNAB_SSK4lmqqkofC07SAalqXPs",
            "DISCOVERY_DOCS": ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            "SCOPES": "https://www.googleapis.com/auth/calendar.readonly"
        }
    }

    render() {
        return (
            <div className="classList">
                <button id="authorize-button" style="display: none;">Authorize</button>
                <button id="signout-button" style="display: none;">Sign Out</button>
            </div>
        );
    }

    
}

export default ListOfClasses;