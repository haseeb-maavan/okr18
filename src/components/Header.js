import React, { Component } from 'react';
import NavBar from './NavBar';
import '../App.css';

class Header extends Component {

  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
      </div>
    );
  }
}

export default Header;
