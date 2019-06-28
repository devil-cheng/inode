import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
export default class Footer extends Component{
    render() {
        return (<Menu
            mode={this.props.mode || 'vertical'}
            className={this.props.class}
        >
            <Menu.Item><Link to="/index/all"><Icon type="home"></Icon>首页</Link></Menu.Item>
            <Menu.Item><Link to="/book"><Icon type="book"></Icon>教程</Link></Menu.Item>
            <Menu.Item><Link to="/about"><Icon type="flag"></Icon>关于</Link></Menu.Item>
        </Menu>)
    }
}