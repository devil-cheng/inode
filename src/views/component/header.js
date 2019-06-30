import React, { Component } from 'react';
import { Layout, Row, Col, Dropdown, Button, Icon } from 'antd';
import HeaderMenu from './comMenu'

export default class IndexHeader extends Component{
    render() {
        return (
            <Layout.Header className="header">
                <Row className="wrap">
                    <Col xs={24} md={6} className="center">INode</Col>
                    <Col xs={0} md={18}>
                        <HeaderMenu
                            mode="horizontal"
                            class="hor-menu"
                            type="header"
                        ></HeaderMenu>
                    </Col>
                </Row>
                <Row className="topMenu">
                    <Col xs={24} md={0}>
                        <Dropdown
                            overlay={() => <HeaderMenu type="header"></HeaderMenu>}
                            placement="bottomRight"
                            trigger={["click","touchend"]}
                            >
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}