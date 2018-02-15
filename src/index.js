import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/home' exact component={Home} />
        </Switch>

      </BrowserRouter>
  , document.getElementById('root'));
//registerServiceWorker();
