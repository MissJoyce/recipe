import React, { Component } from 'react';
import "../assets/css/user.css";
import {connect} from "react-redux";
import {Link} from "react-router";
class User extends Component {
    render() {
        let {num} = this.props;
        return (
            <div>
                <div className="member">
                    <div className="member-pic"><img src="src/assets/images/tx.jpg" alt=""/></div>
                    <div className="member-name">{localStorage.username?<a href="javascript:;">{localStorage.username}</a>:<div><Link to="/login">登录/</Link><Link to="/reg">注册</Link></div>}</div>
                    <div className="member-text">我的DIY美食完成4条</div>
                    <ul className="member-nav">
                        <li>
                            <Link to="/category">
                                <span>{Number(num)>0?num:0}</span>
                                <p>菜谱</p>
                            </Link>
                        </li>
                        <li>
                            <a href="">
                                <span>25</span>
                                <p>关注</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>25</span>
                                <p>粉丝</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>25</span>
                                <p>积分</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="mem-menu">
                    <li>
                        <Link to="/message">
                            <i className="iconfont">&#xe631;</i>
                            <p>我的消息</p>
                        </Link>
                    </li>
                    <li>
                        <a href="">
                            <i className="iconfont">&#xe6ce;</i>
                            <p>我的优惠券</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="iconfont">&#xe6df;</i>
                            <p>我的收藏</p>
                        </a>
                    </li>
                    <li>
                        {/* <a href="javascript:;"> */}
                            <i className="iconfont">&#xe605;</i>
                            <p>{localStorage.username?<Link to="/login" onClick={()=>{localStorage.clear()}}>退出</Link>:<a href="javascript:;">退款/售后</a>}</p>
                        {/* </a> */}
                    </li>
                </ul>
                <ul className="m-item">
                    <li>
                        <a href="">
                            <i className="iconfont">&#xe676;</i>
                            <span>待完成菜单</span>
                            <i className="iconfont" id="youjian">&#xe604;</i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="iconfont">&#xe632;</i>
                            <span>待点评菜单</span>
                            <i className="iconfont" id="youjian">&#xe604;</i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="iconfont">&#xe700;</i>
                            <span>代付款</span>
                            <i className="iconfont" id="youjian">&#xe604;</i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="iconfont">&#xe605;</i>
                            <span>待退货</span>
                            <i className="iconfont" id="youjian">&#xe604;</i>
                        </a>
                    </li>
                </ul>
                <div className="h65"></div>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        // loginSuccess:state.loginSuccess,  判断是否登录成功
        // loginName:state.loginName,
        num:state.buycart.length
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)


