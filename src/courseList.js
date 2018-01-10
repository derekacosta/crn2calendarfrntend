import React, { Component } from 'react';
import './App.css';
import './courseList.css';
const crn = require('./crn.js');

class CourseRow extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.subject} - {this.props.courseSection}</td>
                <td>{this.props.professor}</td>
                <td>{this.props.timings[0].dayName}</td>
                <td>{this.props.timings[0].courseStartTime.toTimeString()} to {this.props.timings[0].courseEndTime.toTimeString()}</td>
            </tr>
        )
    }
}

class ListOfClasses extends Component {
    constructor(props) {
        super(props);
        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            rows: [],
            value:""
        }
    }

    render() {
        return (
            <div className="classList">
                <h1>I don't know what to call this<br /></h1>
                <div>
                    <h2>Classes Selected<br /></h2>
                    <table>
                        <thead>
                            <th>Subject</th>
                            <th>Professor</th>
                            <th>Day</th>
                            <th>Timings</th>
                        </thead>
                        <tbody>
                            {this.state.rows.map(row => <CourseRow {...row[0]}/>)}
                        </tbody>
                    </table>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.removeRow}>Click to remove</button>
            </div>
        );
    }

    addRow(result){
        let nextState = this.state;
        result.subject = this.state.value;
        nextState.rows.push(result);
        this.state.value = "";
        console.log(nextState);
        this.setState(nextState);
    }

    removeRow(){
        let nextState = this.state;
        nextState.rows.pop();
        this.setState(nextState);
    }

    handleChange(event){
        let nextState = this.state;
        nextState.value = event.target.value;
        this.setState(nextState);
    }

    handleSubmit(event){
        event.preventDefault();
        crn.getData(this.state.value).then( result => {
            console.log(JSON.stringify(result));
            this.addRow(result);
        });
    }
}

export default ListOfClasses;