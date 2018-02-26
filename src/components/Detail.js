import React, { Component } from 'react';
import Header from './Header';
import UserLogs from './UserLogs';
import '../App.css';

class Detail extends Component {

  render() {
    return (
        <div>
            <Header history = {this.props.history}/>
            <UserLogs history = {this.props.history} clientId = {this.props.location.state.clientId} clientName = {this.props.location.state.clientName}></UserLogs>
        </div>
    );
  }
}

export default Detail;
