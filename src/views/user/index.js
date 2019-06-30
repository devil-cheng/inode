import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Card } from 'antd'
import UserList from './userlist'
import UserTitle from './title'

class User extends Component{

    constructor(arg){
        super(arg)
        this.getData(this.props.match.params.username)
    }

    getData(name) {
        let { dispatch } = this.props
        dispatch({
            type: "USER_INIT"
        })
        axios.get('https://cnodejs.org/api/v1/user/' + name)
            .then((res) => {
                dispatch({
                    type: "USER_UPDATE",
                    data: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "USER_ERROR",
                    data: err
                })
            })

    }

    componentWillReceiveProps(nextProps) {
        let loginName = nextProps.match.params.username
        if(loginName !== this.props.match.params.username){
            this.getData(loginName)
        }
    }

    render() {
        let data = this.props.data
        return (<div>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <Card
                            title={<UserTitle data={item}/>}
                        >
                        </Card>
                        <UserList
                            loading = {this.props.loading}
                            title = "最近创建的话题"
                            data = {item.recent_topics}
                        />
                        <UserList
                            loading = {this.props.loading}
                            title = "最近回复的话题"
                            data = {item.recent_replies}
                        />
                    </div>
                )
            })}
        </div>)
    }
}
export default connect(store => (store.user))(User)