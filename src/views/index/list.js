import React, { Component } from 'react'
import { List, Avatar, Pagination } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import data from './data'
import ComTag from '../component/comTag'
import axios from 'axios';

class Index extends Component{
    constructor(arg) {
        super(arg)
        let { page, match, limit, total } = this.props
        this.state = {
            total,
            tab: match.params.id
        }
        this.getData(match.params.id, page, limit)

        this.onChange = this.onChange.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
    }

    onChange(page){
        if(this.state.page !== page){
            this.getData(this.state.tab, page, this.props.limit)
        }
    }

    onShowSizeChange(current, size){
        if(this.props.limit !== size){
            this.getData(this.state.tab, 1, size)
        }
    }

    getData(tab, page, limit) {
        let { dispatch } = this.props
        dispatch({
            type: 'LIST_INIT'
        })
        axios.get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&limit=' + limit + '&page=' + page)
            .then((res) => {
                dispatch({
                    type: 'LIST_UPDATE',
                    data: res.data,
                    limit: limit,
                    page: page
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'LIST_ERROR'
                })
            })
    }

    componentWillReceiveProps(nextProps){
        let tab = nextProps.match.params.id
        if(tab !== this.props.match.params.id){
            this.getData(tab, 1, this.props.limit)
            this.setState({
                tab: tab
            })
        }
    }

    render() {
        let { loading, data } = this.props
        return (
            <div className='listMain'>
                <List
                    loading={loading}
                    dataSource = {data}
                    renderItem={(item)=>{
                        return (
                            <List.Item actions={[<span style={{marginLeft: "35px"}}>回复{item.reply_count}</span>, <span>访问:{item.visit_count}</span>]} key={item.id}>
                            <List.Item.Meta
                                style={{minWidth:"200px"}}
                                avatar={<Avatar src={item.author.avatar_url} />}
                                title={(<div>
                                    <ComTag top={item.top} good={item.good} tab={item.tab}/>
                                    <Link to={"/details/"+item.id}>{item.title}</Link>
                                </div>)}
                                description={<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>发表于:{item.create_at.split("T")[0]}</span>}
                            />
                        </List.Item>)
                    }}
                >
                </List>
                {loading ? '': 
                    <Pagination 
                        defaultCurrent={this.props.page} 
                        defaultPageSize={this.props.limit} 
                        total={this.state.total} 
                        onChange={this.onChange}
                        onShowSizeChange={this.onShowSizeChange}
                        showSizeChanger
                        pageSizeOptions={['5', '10', '20']}
                    />
                }
            </div>
        )
    }
}
export default withRouter(connect((store) => {
    return (store.list)
})(Index))