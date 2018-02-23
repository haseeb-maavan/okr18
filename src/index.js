import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';
import { isLoggedIn } from './utils/authService';
import './index.css';
import Home from './components/Home';
import Detail from './components/Detail';
import EditRecord from './components/EditRecord';
import Users from './components/Users';
import App from './App';

ReactDOM.render(
      <BrowserRouter>
        <Switch>

          <Route path='/' exact render={(props)=>(
            isLoggedIn() ?  (<Redirect to = "/home" />)  : <App {...props} />
          )}/>

          <Route path='/home' exact render={(props)=>(
            isLoggedIn() ?  (<Home {...props} />)  : (<Redirect to = "/" />)
          )}/>
          
           <Route path='/detail' exact render={(props)=>(
            isLoggedIn() ?  (<Detail {...props} />)  : (<Redirect to = "/" />)
          )}/>
      
           <Route path='/edit-record' exact render={(props)=>(
            isLoggedIn() ?  (<EditRecord {...props} />)  : (<Redirect to = "/" />)
          )}/>
          
           <Route path='/users' exact render={(props)=>(
            isLoggedIn() ?  (<Users {...props} />)  : (<Redirect to = "/" />)
          )}/>
      

        </Switch>

      </BrowserRouter>
  , document.getElementById('root'));
//registerServiceWorker();
