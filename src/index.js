import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';
import { isLoggedIn } from './utils/authService';
import './index.css';
import Home from './components/Home';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <BrowserRouter>
        <Switch>

          <Route path='/' exact render={(props)=>(
            isLoggedIn() ?  (<Redirect to = "/home" />)  : <App {...props} />
          )}/>

          <Route path='/home' exact render={(props)=>(
            isLoggedIn() ?  (<Home {...props} />)  : (<Redirect to = "/" />)
          )}/>

        </Switch>

      </BrowserRouter>
  , document.getElementById('root'));
//registerServiceWorker();
