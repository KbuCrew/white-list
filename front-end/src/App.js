import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tablelist from './Tablelist';
import Menu from './Menu';
import { Row, Col } from 'antd';


function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}><h1>White List APP</h1></Col>
      </Row>
      <Row>
        <Col span={12}><Tablelist /></Col>
        <Col span={12}><Menu/></Col>
      </Row>
    </div>
  );
}

export default App;
