import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import {logout} from '../utils/authService';
import '../App.css';

class Header extends Component {

  LogoutFromApp(){
    logout();
    this.props.history.push('/');

  }
  render() {
    return (
      <div>
        <a className='logout-btn' onClick={this.LogoutFromApp.bind(this)} >Logout</a>
      </div>
    );
  }
}

export default Header;
