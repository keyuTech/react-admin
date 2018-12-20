import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from '../../utils/utils'

export default class Header extends React.Component {
  state = {}

  componentWillMount() {
    this.setState({
      userName: 'keyu.wang'
    })
    setInterval(() => {
      let sysTime = Utils.formatDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
  }

  render() {
    return (
      <div className="headerContainer">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="header-bottom">
          <Col className="breadcrumb" span="6">首页</Col>
          <Col className="details" span="18">
            <span className="date">{ this.state.sysTime }</span>
          </Col>
        </Row>
      </div>
    )
  }
}