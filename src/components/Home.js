import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class Home extends Component {

  render() {
    return (
      <div>
        <Header history = {this.props.history}/>
      </div>
    );
  }
}

export default Home;
