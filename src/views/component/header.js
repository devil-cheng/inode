import React, { Component } from 'react';
import { Layout, Row, Col, Dropdown, Button, Icon } from 'antd';
import HeaderMenu from './headerMenu'

export default class IndexHeader extends Component{
    render() {
        return (
            <Layout.Header className="header">
                <Row>
                    <Col xs={24} md={6} className="center">INode</Col>
                    <Col xs={0} md={18}>
                        <HeaderMenu
                            mode="horizontal"
                            class="hor-menu"
                        ></HeaderMenu>
                    </Col>
                </Row>
                <Row className="topMenu">
                    <Col xs={24} md={0}>
                        <Dropdown
                            overlay={() => <HeaderMenu></HeaderMenu>}
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