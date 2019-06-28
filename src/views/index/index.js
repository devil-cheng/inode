import React, { Component } from 'react'
import { Row, Col } from 'antd'
import SideMenu from './../component/sideMenu'
export default class Index extends Component{
    render() {
        return (
            <Row>
                <Col md={6} xs={24}>
                    <SideMenu></SideMenu>
                </Col>
            </Row>
        )
    }
}