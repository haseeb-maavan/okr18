import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import moment from 'moment';
import Header from './Header';
import * as Params from '../config/params';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

class EditRecord extends Component {

    constructor(props) {
        super(props);

        var new_date = this.props.location.state.date.split(' ');
        new_date = new_date[1].split(':');
        
        this.state = {
              startDate: moment(this.props.location.state.date),
              hours: new_date[0],
              minutes: new_date[1],
              format: moment(this.props.location.state.date).format('A')
        };
       
  }
  
  renderStatus(status) {
    if (status === 'checkedin') {
      return <span className="green"> Checked In </span>;
    } else {
      return <span className="red"> Checked Out </span>;
    }
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleMinutes(minutes){
    this.setState({
      minutes: minutes.target.value
    });
    
  }
  
   handleHours(hours){
    this.setState({
      hours: hours.target.value
    });
  }
  
   handleFormat(format){
    this.setState({
      format: format.target.value
    });
  }
  
  updateRecord(){
      
      console.log(this.props.location.state.recordId+'&date='+moment(this.state.startDate).format('Y-M-D')+' '+this.state.hours+':'+this.state.minutes+' '+this.state.format);
      axios.get(Params.apiurl + 'log/update?id='+this.props.location.state.recordId+'&date='+moment(this.state.startDate).format('Y-M-D')+' '+this.state.hours+':'+this.state.minutes+' '+this.state.format).then(res => {
            if(res.data.msgType === 'SUC'){
                this.props.history.push({
                   action: 'GET',
                   search: "?clientID=" + this.props.location.state.clientId,
                   pathname: '/detail',
                   state: { clientId: this.props.location.state.clientId, clientName: this.props.location.state.clientName }
               });   
            }
            else{
               alert('Something went wrong! Please try again later.');
            }
       }); 
  }
  
  render() {
    return (
        <div>
            <Header history = {this.props.history}/>
            
            <div className="container" style={{marginTop: '20px'}} >
                   <h2 style={{marginBottom: '22px'}}>Update User Time</h2>
                    <div className="row">
                    <div className="col-lg-3 col-md-1"></div>
                    <div className="col-lg-6 col-md-10">
                        <div className="mille-type-box">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="mille-text">
                                        Name<span>:</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="mille-text">
                                        {this.props.location.state.clientName}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="mille-text">
                                        Status<span>:</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="mille-text">
                                        {this.renderStatus(this.props.location.state.status)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                

                <div className="row margin_t15px">
                    <div className="col-lg-3 col-md-1"></div>
                    <div className="col-lg-6 col-md-10">

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="account-text">
                                    Time<span>:</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div>
                                    <select onChange={this.handleHours.bind(this)} value={this.state.hours}>
                                        {Array.apply(1, Array(12)).map(function (x, i) {
                                                 return <option>{ i+1 }</option>
                                          })}
                                    </select>
                                    
                                    <select style={{marginLeft:'20px'}} onChange={this.handleMinutes.bind(this)} value={this.state.minutes}>
                                         {Array.apply(0, Array(60)).map(function (x, i) {
                                                 return <option>{((i)<10)? ('0'+ i): i}</option>
                                          })}
                                    </select>
                            
                                    <select style={{marginLeft:'20px'}} onChange={this.handleFormat.bind(this)} value={this.state.format}>
                                        <option>{'AM'}</option>
                                        <option>{'PM'}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="account-text">
                                    Date<span>:</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div>
                                    <DatePicker className="account-textbx"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                            </div>
                        </div>
                        <br/>  
                           <a className="login-btn" onClick={this.updateRecord.bind(this)}>Update</a>
                      
                    </div>
                </div>
            </div>
        
       </div> 
    );
  }
}

export default EditRecord;
