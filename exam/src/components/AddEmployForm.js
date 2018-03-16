import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../actions/index';

class AddEmployForm extends Component {
  constructor(props){
      super(props);
      this.state={
       id:'',
       name:'',
       year:'',
       status:false
      };
  }
  onChange=(event)=>{
    var target = event.target
    var name = target.name;
    var value =target.value;
    if(name === 'status'){
      value= target.value === 'true' ? true : false;
    }
    this.setState({
      [name]:value  
    });
  }
  onSubmit = (event) => {
    var {name,year} = this.state;
    event.preventDefault();
    if(name && year){
      this.props.addEmploy(this.state);
      localStorage.setItem('addEm',JSON.stringify(this.props.addEmployState));
      this.onCancel();
    } else {
      alert('Bạn nhập thiếu thông tin, vui lòng kiểm tra lại !!');
    }
  }
  onCancel = () => {
    this.setState({
      id:'',
       name:'',
       year:'',
       status:false
    }); 
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          
          <input 
            type="text" 
            className="mr-top form-control" 
            placeholder="Tên nhân viên"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input 
            type="text" 
            className="mr-top form-control"
            name="year" 
            placeholder="Năm sinh"
            value={this.state.year}
            onChange={this.onChange}
          />
          <select 
            className="form-control mr-top"
            name="status"
             value={this.state.status}
            onChange={this.onChange}
          >
            <option value={true}>Hoạt động</option>
            <option value={false}>Không hoạt động</option>
          </select>

        </div>
        <button type="submit" className="btn btn-success mr-right">Đăng ký</button>
        <button type="button" className="btn btn-primary" onClick={this.onCancel}>Hủy</button>
      </form>
    );
  }
}

const mapStatetoProps = state => {
  return {
    addEmployState:state.AddEmployReducer
  }
};

const mapDispatchtoProps = (dispatch,props) => {
  return {
    addEmploy : (task) => {
      dispatch(action.AddEmploy(task))
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(AddEmployForm);
