import React, { Component } from 'react';
import * as Params from '../config/params';
import { login } from '../utils/authService';
import logo from '../images/logo.png';
import '../App.css';

class LoginPage extends Component {

  AuthenticateCredentials(){
    if((Params.username === this.username.value) && (Params.password === this.password.value)){
      login();
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <div className="page-content">
          <div className="login-container">

            <div className="text-center">
                <img alt="Logger Logo" src={logo} className="img-cust-responsive"/>
            </div>

            <div className="login-contents">
                <h1>Login</h1>
                <input className="login-txtbx" type="text" placeholder="Username" ref={(username) => this.username = username}/><br/><br/>
                <input className="login-txtbx" type="password" placeholder="Password" ref={(password) => this.password = password} />
                <div><a className="login-btn" onClick={this.AuthenticateCredentials.bind(this)}>Log In</a></div>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
