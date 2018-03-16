import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShowList extends Component {
  
  render() {
    return (
     <div className="showlist">
        <button type="button" className="btn btn-warning mr-right">LIST ALL</button>
        <button type="button" className="btn btn-info mr-right">ACTIVE</button>
        <button type="button" className="btn btn-success mr-right">INACTIVE</button>
     </div> 
    );
  }
}

function mapStatetoProps(state){
  return {
    
  }
};

function mapDispatchtoProps(dispatch){
  return {
    // DeleteUser:bindActionCreators(DeleteUser, dispatch),
    // UpdateUser:bindActionCreators(UpdateUser,dispatch)
  }
}; 
export default connect(mapStatetoProps,mapDispatchtoProps)(ShowList);


