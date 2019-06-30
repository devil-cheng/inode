import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const menu = [
    {
        url: '/index/all',
        name: '全部',
        key: 'all',
        type: 'side'
    }, {
        url: '/index/good',
        name: '精华',
        key: 'good',
        type: 'side'
    }, {
        url: '/index/share',
        name: '分享',
        key: 'share',
        type: 'side'
    }, {
        url: '/index/ask',
        name: '问答',
        key: 'ask',
        type: 'side'
    }, {
        url: '/index/job',
        name: '招聘',
        key: 'job',
        type: 'side'
    }, {
        url: '/index/all',
        name: '首页',
        icon: 'home',
        key: 'index',
        type: 'header'
    }, {
        url: '/book',
        name: '教程',
        icon: 'book',
        key: 'book',
        type: 'header'
    }, {
        url: '/about',
        name: '关于',
        icon: 'flag',
        key: 'about',
        type: 'header'
    }
]

class ComMune extends Component{

    constructor(arg){
        super(arg)
        let now = this.getNow(this.props.now)
        this.state = {
            now
        }
        
    }

    getNow(location) {
        let now = location.split('/')
        return this.props.type === 'header' ? now[1] : now[2]
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.now !== nextProps.now){
            let now = this.getNow(nextProps.now)
            this.setState({
                now
            })
            return false
        }
        return true
    }

    render() {
        let data = menu.filter((item) => (item.type === this.props.type))
        return (<Menu
            mode={this.props.mode}
            className={this.props.class}
            selectedKeys={[this.state.now]}
        >
            {
                data.map((item, index) => {
                    return <Menu.Item key={item.key}><Link to={item.url}>{ item.icon ? <Icon type={item.icon}></Icon>: ''}{item.name}</Link></Menu.Item>
                })
            }
        </Menu>)
    }
}
export default withRouter((props) => {
    return <ComMune
        mode={props.mode}
        type={props.type}
        class={props.class}
        now={props.location.pathname}
    ></ComMune>
})