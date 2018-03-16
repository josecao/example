import React, { Component } from 'react';
import AddEmploy from './components/AddEmploy';
import ListEmploy from './components/ListEmploy';
import ShowList from './components/ShowList';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">Quản lý nhân viên</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <AddEmploy/>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <ListEmploy />
                  <ShowList/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
