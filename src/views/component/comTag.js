import React, { Component } from 'react'
import { Tag } from 'antd'

const tabSchema =  {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};
export default class comTag extends Component{
    render() {
        let { top, good, tab } = this.props
        return (<Tag
            color={
                top ?
                    'magenta' :
                    good ?
                        'green' :
                        'geekblue'
            }
        >
            { top ? '置顶' : good ? '精华' : tabSchema[tab] ? tabSchema[tab] : '分享' }
        </Tag>)
    }
} 

