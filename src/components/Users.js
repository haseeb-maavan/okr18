import React, { Component } from 'react';
import * as Params from '../config/params';
import axios from 'axios';
import moment from 'moment';
import Header from './Header';
import '../App.css';

class Users extends Component {

   state = {
        users: []
    }
    
  componentDidMount() {
      axios.get(Params.apiurl + 'employees').then(res => {
      this.setState({users:res.data});
      console.log(res.data);
     
    });
  }
  
  gotoDetail(clientId , e){
      
       this.props.history.push({
        action : 'GET',
        search: "?clientID=" + clientId,
        pathname: '/detail',
        state: { clientId: clientId }
      });
        
  }
 
  render() {
    return (
        <div>     
            <Header history = {this.props.history}/> 
            <div className="container" style={{marginTop: '20px'}} >
             <h2 style={{marginBottom: '22px'}}>User Activity</h2>
             <table className="table table-hover">
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Status</th>
                   <th>Last Activity</th>
                 </tr>
               </thead>

               <tbody>
                    { this.state.users.map((item, index) => (
                 
                <tr>
                    <td><a href='' onClick = {this.gotoDetail.bind(this, item._id)}>{item.name}</a></td>
                    <td>{(item.check_in)? 'Checked In': 'Checked Out'}</td>
                    <td>at {moment(item.updated_at).format('hh:mm A')} on {moment(item.updated_at).format('M/D/Y')}</td>
                </tr>
      
             ))}
               </tbody>

             </table>
            </div>
        </div> 
    );
  }
}

export default Users;
