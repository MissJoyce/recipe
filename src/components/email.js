import React, { Component } from 'react'
import "../assets/css/email.css";
export default class Email extends Component {
    render() {
        return (
            <div className="email">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{this.props.router.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">邮箱</h1>
                </header>
                <div className="h57"></div>
                <a className="write" href=""><i className="iconfont">&#xe647;</i>写一封信</a>
                <ul className="mui-table-view emali">
                    <li className="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img className="mui-media-object mui-pull-left fl" src="src/assets/images/t1.png" />
                            <div className="mui-media-body">  生活讨论区 <i>2017-9-10</i></div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img className="mui-media-object mui-pull-left fl" src="src/assets/images/t1.png" />
                            <div className="mui-media-body">  商业讨论区 <i>2017-9-10</i></div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img className="mui-media-object mui-pull-left fl" src="src/assets/images/t1.png" />
                            <div className="mui-media-body"> 周边 <i>2017-9-10</i></div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
