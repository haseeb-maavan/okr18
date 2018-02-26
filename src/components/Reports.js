import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as Params from '../config/params';
import Header from './Header';
import '../App.css';

class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: moment(),
            to: moment(),
            user: '',
            logs: [],
            users: []
        };
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
    }

    componentDidMount() {
        this.getResults();
        this.getUsers();
    }

    handleChangeFrom(date) {
        this.setState({from: date}, () => {
            this.getResults();
        });
    }
    handleChangeTo(date) {
        this.setState({to: date}, () => {
            this.getResults();
        });
    }
    handleChangeUser(event) {
        this.setState({user: event.target.value}, () => {
            console.log(this.state);
            this.getResults();
        });
    }

    getResults() {
        var start = moment(this.state.from).format('MM/DD/YYYY');
        var end = moment(this.state.to).format('MM/DD/YYYY');
        var userId = this.state.user === "" ? '' : '/' + this.state.user;
        axios.get(Params.apiurl + 'employee/report' + userId + '?date_from=' + start + '&date_to=' + end).then(res => {
            this.setState({'logs': (res.data instanceof Array) ? res.data : [res.data]});
        });
    }

    getUsers() {
        axios.get(Params.apiurl + 'employees').then(res => {
            this.setState({'users': res.data});
            console.log(this.state);
        });
    }

    gotoDetail(clientId, e) {
        this.props.history.push({
            action: 'GET',
            search: "?clientID=" + clientId,
            pathname: '/detail',
            state: {clientId: clientId}
        });
    }

    render() {
        return (
                <div>
                    <Header history = {this.props.history}/>
                    <div className="container" style={{marginTop: '20px'}} >
                        <h2 style={{marginBottom: '22px'}}>Employees Reports</h2>
                        <div className=''>
                            <label style={{marginRight: '30px'}}>From:
                                <DatePicker selected={this.state.from} onChange={this.handleChangeFrom} />
                            </label>
                            <label style={{marginRight: '30px'}}>To:
                                <DatePicker selected={this.state.to} onChange={this.handleChangeTo} />
                            </label>
                            <label >User:
                                <div>
                                    <select value={this.state.user} onChange={this.handleChangeUser} style={{padding: "2px 5px"}}>
                                        <option value="">Select User</option>
                                        { this.state.users.map((item, index) => (
                                                                    <option key = {item._id + item.name} value={item._id}>{item.name}</option>
                                                                                    ))}
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div style={{marginTop: '30px'}}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Hours</th>
                                    </tr>
                                </thead>
                
                                <tbody>
                                    { this.state.logs.map((item, index) => (
                                                                        <tr key = {item._id}>
                                                                            <td key = {item._id + item.employee}>{item.employee}</td>
                                                                            <td key = {item._id + item.total_hours}>{item.total_hours}</td>
                                                                        </tr>
                                                                                    ))}
                
                                </tbody>
                
                            </table>
                        </div>
                    </div>
                </div>
                                                );
                                    }
                                }

                                export default Reports;
