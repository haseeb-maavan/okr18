import React, { Component } from 'react';
import axios from "axios";
import '../App.css';

class UserLogs extends Component {

state = {
    logs : []
}

componentDidMount() {
    axios.get('http://localhost:10000/index').then(res=>{
    console.log(res.data);
    const logs = res.data;
    this.setState({logs});
  });
}

  render() {
    return (
      <div>
            { this.state.logs.map((item, index) => (
                <ul key={index+item._id + index.userId + item.status}>
                  Object ID:    <li key={index+item._id} > {item._id}</li>
                  UserID:       <li key={index+item.userId} > {item.userId}</li>
                  Punch Status: <li key={index+item.status} > {item.status}</li>
                </ul>

            ))}

      </div>
    );
  }
}

export default UserLogs;
