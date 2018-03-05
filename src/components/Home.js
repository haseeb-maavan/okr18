import React, { Component } from 'react';
import axios from 'axios';
//import moment from 'moment';
import * as Params from '../config/params';
import Header from './Header';
import '../App.css';

class Home extends Component {
    checkedIn = [];
    checkedOut = [];
    constructor(props) {
        super(props);
        this.state = {
            checkedIn: [],
            checkedOut: [],
            searchQuery: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        axios.get(Params.apiurl + 'checkedinemployees').then(res => {
            this.setState({'checkedIn': res.data});
            this.checkedIn = res.data;
            console.log(this.checkedIn);
        });
        axios.get(Params.apiurl + 'checkedoutemployees').then(res => {
            this.setState({'checkedOut': res.data});
            this.checkedOut = res.data;
            console.log(this.checkedOut);
        });
    }

    gotoDetail(item, e) {
        this.props.history.push({
            action: 'GET',
            search: "?clientID=" + item._id,
            pathname: '/detail',
            state: { clientId: item._id, clientName: item.name }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => {
            console.log(this.state);
            this.instanSearch(target.value);
        });
    }

    instanSearch(query) {
        var searchQuery = query.toLowerCase();
        var displayedCheckedInList = this.checkedIn.filter(function (el) {
            var name = el.name.toLowerCase();
            return name.indexOf(searchQuery) !== -1 || el.check_in.toString().toLowerCase().indexOf(searchQuery) !== -1;
        });
        var displayedCheckedOutList = this.checkedOut.filter(function (el) {
            var name = el.name.toLowerCase();
            return name.indexOf(searchQuery) !== -1 || el.check_in.toString().toLowerCase().indexOf(searchQuery) !== -1;
        });

        this.setState({'checkedIn': displayedCheckedInList, 'checkedOut': displayedCheckedOutList}, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
                <div>
                    <Header history = {this.props.history}/>
                    <div className="container" style={{marginTop: '20px'}} >
                        <h2 style={{marginBottom: '22px'}}>Employees Summary</h2>
                        <div className=''>
                            <input name="searchQuery" value={this.state.from} onChange={this.handleInputChange} placeholder="Search"/>
                        </div>
                        <div style={{marginTop: '30px'}}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                
                                <tbody>
                                    { this.state.checkedIn.map((item, index) => (
                                                            <tr key = {item._id}>
                                                                <td key = {item._id + item.name}><a href='' onClick = {this.gotoDetail.bind(this, item)}>{item.name}</a></td>
                                                                <td className='green'>Checked In</td>
                                                            </tr>
                                                                        ))}
                
                                    { this.state.checkedOut.map((item, index) => (
                                                            <tr key = {item._id}>
                                                                <td key = {item._id + item.name}><a href='' onClick = {this.gotoDetail.bind(this, item)}>{item.name}</a></td>
                                                                <td className='red'>Checked Out</td>
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

                    export default Home;
