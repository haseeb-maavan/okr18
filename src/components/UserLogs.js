import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import * as Params from '../config/params';
import '../App.css';

class UserLogs extends Component {

 
  state = {
    logs: [
      {
        "_id" : "5a8c2c13b1c36df5bf56111c",
        "userId" : "5a8c25a7b1c36df5bf561071",
        "status" : "checkedin",
        "date" : "2018-02-22T11:51:31.985Z"
            },
            {
        "_id" : "5a8c2cfcb1c36df5bf561144",
        "userId" : "5a8c2c66b1c36df5bf56112e",
        "status" : "checkedout",
        "date" : "2018-02-22T11:00:31.985Z"
      }
    ],
    users:[]
  }

  componentDidMount() {
    
      axios.get(Params.apiurl + 'employeeactivity/' + this.props.clientId).then(res => {
      console.log(res.data);
     // const logs = res.data;
     // this.setState({logs});
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
      return <span className="green"> Checked in </span>;
    } else {
      return <span className="red"> Checked out </span>;
    }
  }
  
  editRecord(row , e){
      this.props.history.push({
        action : 'GET',
        search: '?tokenID='+ row._id,
        pathname: '/edit-record',
        state: { recordId: row._id, clientId: row.userId, status: row.status, date: row.date }
      });
  }

  render() {
    return (
       <div className="container" style={{marginTop: '20px'}} >
        <h2 style={{marginBottom: '22px'}}>User Activity</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Status</th>
              <th>Time</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
  
          <tbody>
             { this.state.logs.map((item, index) => (
                 
                <tr key = {item.status + item.date}>
                    <td key = {item.userId}>{this.getUserName(item.userId)}</td>
                    <td>{this.renderStatus(item.status)}</td>
                    <td>{moment(item.date).format('hh:mm A')}</td>
                    <td>{moment(item.date).format('M/D/Y')}</td>
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
