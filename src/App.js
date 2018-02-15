import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
           <LoginPage history={this.props.history} />
     </div>
    );
  }
}

export default App;
