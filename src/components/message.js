import React, { Component } from 'react'

class Message extends Component{
    render(){
        return (
            <div className="msg">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{this.props.router.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">消息</h1>
                </header>
                <div className="h57"></div>
                <ul className="mui-table-view emali">
                    <li className="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img className="mui-media-object mui-pull-left fl" src="src/assets/images/t1.png" />
                            <div className="mui-media-body">
                                                        生活讨论区
                                <p className='mui-ellipsis'>我想问一下，大家做便当带回公司，都是自己带的</p>
                            </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img className="mui-media-object mui-pull-left fl" src="src/assets/images/t1.png" />
                            <div className="mui-media-body">
                                                        商业讨论区
                                <p className='mui-ellipsis'>不好意思，问一下？大家觉得美食家怎么样</p>
                            </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img className="mui-media-object mui-pull-left fl" src="src/assets/images/t1.png" />
                            <div className="mui-media-body">
                                                        周边
                                <p className='mui-ellipsis'>南昌周边的有没有</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Message;