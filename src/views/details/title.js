import React, { Component } from 'react'
import { Avatar } from 'antd'
import { Link } from 'react-router-dom'
import ComTag from '../component/comTag'

export default class userClass extends Component{
    render() {
        let data = this.props.data
        return (<div>
            <h2>{data.title}</h2>
            <div style={{display:"flex",alignItems:"center"}}>
                <ComTag top={data.top} good={data.good} tab={data.tab}/>
                <Avatar src={data.author.avatar_url} style={{margin:"0 5px"}} size="small" />
                <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                <span style={{marginLeft:"5px"}}>发表于：{data.create_at.split("T")[0]}</span>
            </div>
        </div>)
    }
} 

