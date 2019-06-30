import React, { Component } from 'react'
import { Row, Col } from 'antd'
import SideMenu from './../component/comMenu'
import List from './list'
export default class Index extends Component{
    render() {
        return (
            <Row>
                <Col md={6} xs={24}>
                    <SideMenu
                        type="side"
                        class="sideMenu"
                        ></SideMenu>
                </Col>
                <Col md={18} xs={24} className="indexList">
                    <List></List>
                </Col>
            </Row>
        )
    }
}