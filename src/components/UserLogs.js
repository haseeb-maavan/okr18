import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import * as Params from '../config/params';
import '../App.css';

class UserLogs extends Component {

  state = {
    logs: []
  }

  componentDidMount() {
    
      axios.get(Params.apiurl + 'employeeactivity/' + this.props.clientId).then(res => {
      console.log(res.data);
      const logs = res.data;
      this.setState({logs});
    });
    
    axios.get(Params.apiurl + 'employees').then(res => {
      this.setState({['users']:res.data});
      console.log(this.state);
    });
  }
  
  getUserName(id) {
      return 'helo name- '+id;
  }
  
  renderStatus(status) {
    if (status === 'checkedin') {
      return <span className="green"> Checked In </span>;
    } else {
      return <span className="red"> Checked Out </span>;
    }
  }
  
  editRecord(row , e){
      this.props.history.push({
        action : 'GET',
        search: '?tokenID='+ row._id,
        pathname: '/edit-record',
        state: { recordId: row._id, clientId: row.userId, status: row.status, date: moment(row.date.date).format('Y-M-D h:mm A'), clientName: this.props.clientName }
      });
  }

  render() {
    return (
       <div className="container" style={{marginTop: '20px'}} >
        <h2 style={{marginBottom: '22px'}}>User Activity</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Status</th>
              <th>Time</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
  
          <tbody>
             { this.state.logs.map((item, index) => (
                 
                <tr key = {item.status + item.date.date}>
                    <td key = {item.userId}>{this.props.clientName}</td>
                    <td>{this.renderStatus(item.status)}</td>
                    <td>{moment(item.date.date).format('hh:mm A')}</td>
                    <td>{moment(item.date.date).format('M/D/Y')}</td>
                    <td>
                        <button type="button" className="btn btn-default btn-sm" onClick={this.editRecord.bind(this,item)}>
                            <span className="glyphicon glyphicon-edit"></span> Edit
                        </button>
                    </td>
                </tr>
      
             ))}

          </tbody>
 
        </table>
        </div>
    );
  }
}

export default UserLogs;
