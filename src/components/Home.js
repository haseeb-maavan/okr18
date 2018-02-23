import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class LoginPage extends Component {

  render() {
    return (
      <div>
        <Header history = {this.props.history}/>
      </div>
    );
  }
}

export default LoginPage;
