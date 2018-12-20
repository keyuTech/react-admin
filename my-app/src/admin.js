import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/common.less'
import Home from './pages/home'

export default class Admin extends React.Component {

  render() {
    return ( 
      <Row className="container">
        <Col span="4" className="nav-bar">
            <Navbar></Navbar>
        </Col>
        <Col span="20" className="main">
          <Header></Header>
          <Row>
            <Home></Home>
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}