import React, { Component } from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'
import axios from 'axios'
import ReplyList from './replies'
import DetailTitle from './title'


class Details extends Component{
    constructor(arg){
        super(arg)
        this.getData(this.props.match.params.id)
    }

    getData(id){
        let { dispatch } = this.props
        dispatch({
            type: 'DETAIL_INIT'
        })
        axios.get('https://cnodejs.org/api/v1/topic/' + id)
            .then((res) => {
                dispatch({
                    type: 'DETAIL_UPDATE',
                    data: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'DETAIL_ERROR'
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        let id = nextProps.match.params.id
        if(id !== this.props.match.params.id){
            this.getData(id)
        }
    }

    render() {
        let { data, loading } = this.props
        return (<div
            className="mainWrap"
        >
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card
                                loading = {loading}
                                title={<DetailTitle data={item}/>}
                            >
                                <div dangerouslySetInnerHTML={
                                    {__html:item.content}
                                }></div>
                            </Card>
                            <ReplyList
                                loading = {loading}
                                reply_count = {item.reply_count}
                                replies = {item.replies}
                            >
                            </ReplyList>
                        </div>
                    )
                })
            }
        </div>)
    }
}
export default connect(store => (store.details))(Details)