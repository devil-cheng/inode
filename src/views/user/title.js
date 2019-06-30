import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'

export default class userClass extends Component{
    render() {
        let data = this.props.data
        return (<div>
            <Avatar
                src={data.avatar_url}
                className = "userAvatar"
            />
            <Row className="userInfo">
                <Col md={8} xs={24}>
                    {<span>用户名:<a>{data.loginname}</a></span>}
                </Col>
                <Col md={8} xs={24}>
                    {<span>积分:<a>{data.score}</a></span>}
                </Col>
                <Col md={8} xs={24}>
                    {<span>注册时间:<a>{data.create_at.split("T")[0]}</a></span>}
                </Col>
            </Row>
        </div>)
    }
} 

