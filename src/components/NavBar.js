import React, { Component } from 'react';
import {logout} from '../utils/authService';
import logo from '../images/logo.png';
import '../App.css';

class NavBar extends Component {

  LogoutFromApp(){
    logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="header-container_outer">
      <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="logo"><a href=""><img src={logo} alt=""/></a></div>
             </div>
             <div className="col-lg-7 col-md-6 col-sm-8 ">
                <div className="header-nav clearfix">
                    <a href="/users">Users</a>
                    <a href="/reports">Reports</a>
                    <a href="/home">Home</a>
                </div>
             </div>
             <div className="logout-btn">
                  <a onClick={this.LogoutFromApp.bind(this)} >Logout</a>
             </div>
            </div>
          </div>
        </div>
    );
  }
}

export default NavBar;
