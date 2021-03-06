import React from 'react'
import Request from '../components/request';
import RequestPost from '../components/request-post';
import RequestForm from '../components/request-form';
import ClassComponent from '../components/class-component';
import RequestNormal from '../components/request-normal';
import RequestRestful from '../components/request-restful';

export default () => {
  return <div className="App">
    <div className="card">
      <Request />
    </div>
    <div className="card">
      <RequestPost />
    </div>
    <div className="card">
      <RequestForm />
    </div>
    <div className="card">
      <ClassComponent />
    </div>
    <div className="card">
      <RequestNormal />
    </div>
    <div className="card">
      <RequestRestful />
    </div>
  </div>
}