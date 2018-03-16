import React, { Component } from 'react';
import ItemEmploy from './ItemEmploy';
import {connect} from 'react-redux';

class ListEmploy extends Component {
  render() {

    var datas = this.props.listemploy;
  
    var el = datas.map((data,index)=>{
      return <ItemEmploy key={index} rank={index} name={data.name} year={data.year} status={data.status} id={data.id}/>      
    });
    return (
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách nhân viên</h3>
        </div>
        <div className="panel-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Năm sinh</th>
                <th>Trạng thái</th>
                <th>Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {el}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return { 
    listemploy:state.AddEmployReducer,
  }
};


export default connect(mapStatetoProps,null)(ListEmploy);
