import React, { Component } from 'react';
import axios from "axios";
import moment from "moment";
import * as Params from '../config/params';
import '../App.css';

class UserLogs extends Component {

    state = {
        logs: []
    }

    componentDidMount() {
        axios.get(Params.apiurl + 'index').then(res => {
            console.log(res.data);
            const logs = res.data;
            this.setState({logs});
        });
    }
    renderStatus(status) {
        if (status == 'checkedin') {
            return <span className="green"> Checked in </span>;
        } else {
            return <span className="red"> Checked out </span>;
        }
    }

    render() {
        return (
                <div className="container ">
                    <div className='content'>
                        <div className="content-h">
                            <h2>User Activity</h2>
                        </div>
                        { this.state.logs.map((item, index) => (
                                                <div key={index + item._id + index.userId + item.status} className="log-row">
                                                    <span  key={index + item.userId} className='name'> {item.userId}</span>
                                                    {this.renderStatus(item.status)} at
                                                    <span key={index + item.date + 1} className='time'> {moment(item.date).format('hh:mm A')} </span>
                                                    <span key={index + item.date} className='date'> on {moment(item.date).format('M/D/Y')} </span>
                                                </div>

                                                ))}
                
                    </div>
                </div>
                );
    }
}

export default UserLogs;
