import React, { Component } from 'react'
import {Link} from "react-router";
export default class Foot extends Component {
    render() {
        return (
            <nav className="mui-bar mui-bar-tab" id="footNav">
                <Link to="/video" className="mui-tab-item" activeClassName="mui-active">
                    <span className="mui-icon iconfont">&#xe62f;</span>
                    <span className="mui-tab-label">推荐</span>
                </Link>
                <Link to="/show" className="mui-tab-item" activeClassName="mui-active">
                    <span className="mui-icon iconfont">&#xe61b;</span>
                    <span className="mui-tab-label">发现</span>
                </Link>
                <Link to="/home" className="mui-tab-item" activeClassName="mui-active">
                    <span className="mui-icon iconfont">&#xe694;</span>
                    <span className="mui-tab-label">商城</span>
                </Link>
                <Link to="/eat" className="mui-tab-item" activeClassName="mui-active">
                    <span className="mui-icon iconfont">&#xe646;</span>
                    <span className="mui-tab-label">食话</span>
                </Link>
                <Link to="/user" className="mui-tab-item" activeClassName="mui-active">
                    <span className="mui-icon iconfont">&#xe6a3;</span>
                    <span className="mui-tab-label">我的</span>
                </Link>
            </nav>
        )
    }
}
