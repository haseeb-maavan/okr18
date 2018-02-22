import React, { Component } from 'react';
import Header from './Header';
import UserLogs from './UserLogs';
import '../App.css';


class LoginPage extends Component {

  render() {
    return (
      <div>
        <Header history = {this.props.history}/>
        <UserLogs></UserLogs>
      </div>
    );
  }
}

export default LoginPage;
