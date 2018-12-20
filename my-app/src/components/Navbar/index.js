import React from 'react';
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;

export default class Navbar extends React.Component {
  componentWillMount() {
    const menuTree = this.renderMenu(MenuConfig)
    this.setState({
      menuTree
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div className="menuContainer">
        <div className="logo">
          <img className="logoImg" src="/asset/logo-ant.svg" alt="ant logo"/>
          <h1 className="logoText">Manage System</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTree}
        </Menu>
      </div>
    )
  }
}