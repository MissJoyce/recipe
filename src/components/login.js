import React, { Component } from 'react'
import "../assets/css/login.css";
import {Link,hashHistory} from "react-router";
import {connect} from "react-redux";

class Login extends Component {
    constructor(){
        super();
        this.state={
            loginName:"",
            loginPsd:"",
            loginSuc:false
        }
        this.changeName=this.changeName.bind(this);
        this.nameBlur=this.nameBlur.bind(this);
        this.changePsd=this.changePsd.bind(this);
        this.psdBlur=this.psdBlur.bind(this);
        this.login=this.login.bind(this);
    }
    render() {
        return (
            <div className="login">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{hashHistory.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">登录</h1>
                    <Link to="/reg" className=" mui-pull-right mui-btn-link">注册</Link>
                </header>
                <div className="mui-content">
                    <form id='login-form' className="mui-input-group">
                        <div className="mui-input-row">
                            <label>账号</label>
                            <input id='account' type="text" className="mui-input-clear mui-input" placeholder="手机/邮箱/用户名" value={this.state.loginName} onChange={this.changeName} onBlur={this.nameBlur.bind(null,this.state.loginName)}/>
                        </div>
                        <div className="mui-input-row">
                            <label>密码</label>
                            <input id='password' type="password" className="mui-input-clear mui-input" placeholder="请输入密码" value={this.state.loginPsd} onChange={this.changePsd} onBlur={this.psdBlur.bind(null,{name:this.state.loginName,psd:this.state.loginPsd})}/>
                        </div>
                    </form>
                    <div className="mui-content-padded">
                        <button id='login' className="mui-btn mui-btn-block mui-btn-primary" onClick={this.login.bind(null,{name:this.state.loginName,psd:this.state.loginPsd})}>登录</button>
                        <div className="login-text">
                            <a href="" className="left">通过短信验证登录</a>
                            <a href="" className="right">登录遇到问题?</a>
                        </div>
                    </div>
                </div>
                <div className="else-login">
                    <p>其他方式登录</p>
                    <ul className="login-style">
                        <li className="icon-qq"><a href=""><i className="iconfont">&#xe656;</i></a></li>
                        <li className="icon-wexin"><a href=""><i className="iconfont">&#xe663;</i></a></li>
                        <li className="icon-weibo"><a href=""><i className="iconfont">&#xe62b;</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getUser();
    }
    changeName(ev){
        this.setState({
            loginName:ev.target.value
        })
    }
    nameBlur(name){
        this.props.loginName(name);
    }
    changePsd(ev){
        this.setState({
            loginPsd:ev.target.value
        })
    }
    psdBlur(pasword){
        this.props.loginPsd(password);
    }
    login(data){
        this.props.loginBtn(data);
        setTimeout(()=>{
            var {loginSuccess} = this.props;
            if(loginSuccess){
                this.props.router.push("/home");
                this.props.getBuycartSata();
            }
            console.log("hahah",loginSuccess)
        },100)
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        loginSuccess:state.loginSuccess
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        loginName:(data)=>{
            dispatch({type:"LOGIN_NAME",payload:data})
        },
        loginPsd:(data)=>{
            dispatch({type:"LOGIN_PSD",payload:data})
        },
        loginBtn:(data)=>{
            dispatch({type:"LOGIN_BTN",payload:data})
        },
        getUser:()=>{
            dispatch({type:"GET_USER"})
        },
        getBuycartSata:()=>{
            dispatch({type:"GET_BUYCART_DATA"})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
