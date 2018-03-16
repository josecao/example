import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DeleteUser,UpdateUser} from '../actions/index';
import { bindActionCreators } from 'redux';
class ItemEmploy extends Component {

  render() {
    return (
     <tr>
        <td>{this.props.rank + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.year}</td>
        <td onClick={()=>this.props.UpdateUser(this.props.id)}>{this.props.status ? 'Hoạt động' : 'Không hoạt động'} <span className="label label-danger"><span className="glyphicon glyphicon-wrench" aria-hidden="true" ></span></span></td>
        <td>
          <button type="button" className="btn btn-danger" onClick={()=>this.props.DeleteUser(this.props.id)}>Xóa</button>
        </td>
      </tr>
    );
  }
}

function mapStatetoProps(state){
  return {
    
  }
};

function mapDispatchtoProps(dispatch){
  return {
    DeleteUser:bindActionCreators(DeleteUser, dispatch),
    UpdateUser:bindActionCreators(UpdateUser,dispatch)
  }
}; 
export default connect(mapStatetoProps,mapDispatchtoProps)(ItemEmploy);
