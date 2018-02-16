import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class LoginPage extends Component {

  render() {
    return (
      <div>
        <Header history = {this.props.history}/>
        <div><h1>You are on Home Page</h1></div>
      </div>
    );
  }
}

export default LoginPage;
