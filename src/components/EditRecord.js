import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class EditRecord extends Component {

  componentDidMount(){
      console.log(this.props);
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
                                    Name on account<span>:</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div>
                                    <input type="text" className="account-textbx Required" name="acc_name" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
       </div> 
    );
  }
}

export default EditRecord;
