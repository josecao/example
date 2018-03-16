import React, { Component } from 'react';
import AddEmployForm from './AddEmployForm';
class AddEmploy extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm nhân viên</h3>
        </div>
        <div className="panel-body">
          <AddEmployForm />
        </div>
      </div>
    );
  }
}

export default AddEmploy;
