import React, { Component } from 'react'

import {connect} from "react-redux";
import {Link} from "react-router";
class Reg extends Component {
    constructor(){
        super()
        this.state={
            regName:'',
            regPsd:'',
            checkRegPsd:'',
            regEmail:'',
        }
        this.changeRegName=this.changeRegName.bind(this);
        this.nameBlur=this.nameBlur.bind(this);
        this.changeRegPsd=this.changeRegPsd.bind(this);
        this.psdBlur=this.psdBlur.bind(this);
        this.changeCheckPsd=this.changeCheckPsd.bind(this);
        this.checkPsdBlur=this.checkPsdBlur.bind(this);
        this.changeRegEmail=this.changeRegEmail.bind(this);
        this.emailBlur=this.emailBlur.bind(this);
        this.userRegBtn=this.userRegBtn.bind(this);
    }
    render() {
        let {userObj} = this.props;
        return (
            <div className="login">
                <header className="mui-bar mui-bar-nav header">
                    <a className="mui-action-back mui-pull-left mui-btn-link" onClick={()=>{this.props.router.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title" id="regHead">注册</h1>
                </header>
                <div className="mui-content">
                    <form className="mui-input-group">
                        <div className="mui-input-row">
                            <label>账号</label>
                            <input id='account' type="text" className="mui-input-clear mui-input" required placeholder="请输入账号" value={this.state.regName} onChange={this.changeRegName} onBlur={this.nameBlur.bind(null,this.state.regName)}/>
                        </div>
                        <div className="mui-input-row">
                            <label>密码</label>
                            <input id='password' type="password" className="mui-input-clear mui-input" required placeholder="请输入密码" value={this.state.regPsd} onChange={this.changeRegPsd} onBlur={this.psdBlur.bind(null,this.state.regPsd)}/>
                        </div>
                        <div className="mui-input-row">
                            <label>确认</label>
                            <input id='password_confirm' type="password" className="mui-input-clear mui-input" required placeholder="请确认密码" value={this.state.checkRegPsd} onChange={this.changeCheckPsd} onBlur={this.checkPsdBlur.bind(null,this.state.checkRegPsd)}/> 
                        </div>
                        <div className="mui-input-row">
                            <label>邮箱</label>
                            <input id='email' type="email" className="mui-input-clear mui-input" required placeholder="请输入邮箱" value={this.state.regEmail} onChange={this.changeRegEmail} onBlur={this.emailBlur.bind(null,this.state.regEmail)}/>
                        </div>
                    </form>
                    <div className="mui-content-padded">
                        <button id='reg' className="mui-btn mui-btn-block mui-btn-primary" onClick={this.userRegBtn.bind(null,userObj)}>注册</button>
                    </div>
                    <div className="mui-content-padded reg-padded" >
                        <p>注册真实可用，注册成功后的用户可用于登录，但是示例程序并未和服务端交互，用户相关数据仅存储于本地。</p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getUser();
    }
    // 1，输入账号
    changeRegName(ev){
        // console.log(ev.target.value)
        this.setState({
            regName:ev.target.value
        })
    }
    //check账号
    nameBlur(username){
        this.props.regName(username);        
    }
    // 2.输入密码
    changeRegPsd(ev){
        // console.log(ev.target.value)
        this.setState({
            regPsd:ev.target.value
        })
    }
    //check密码
    psdBlur(password){
        this.props.regPsd(password);
    }
    // 3.确认密码
    changeCheckPsd(ev){
        // console.log(ev.target.value)        
        this.setState({
            checkRegPsd:ev.target.value
        })
    }
    // 再次确认密码
    checkPsdBlur(checkpassword){
        this.props.checkRegPsd(checkpassword);
    }
    // 4.输入邮箱
    changeRegEmail(ev){
        this.setState({
            regEmail:ev.target.value
        })
    }
    // check email
    emailBlur(email){
        this.props.regEmail(email);
    }

    // 注册btn
    userRegBtn(data){
        this.props.regBtn(data);
        setTimeout(()=>{
            var {regSuccess} = this.props;
            if(regSuccess){
                this.props.router.push("/login");
            }
            console.log("reg",regSuccess);
        },0)
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        userObj:state.userObj,
        regSuccess:state.regSuccess
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        regName:(name)=>{
            dispatch({type:"REG_NAME",payload:name})
        },
        regPsd:(password)=>{
            dispatch({type:"REG_PSD",payload:password})
        },
        checkRegPsd:(password)=>{
            dispatch({type:"CHECK_REG_PSD",payload:password})
        },
        regEmail:(email)=>{
            dispatch({type:"REG_EMAIL",payload:email})
        },
        regBtn:(userObj)=>{
            dispatch({type:"REG_BTN",payload:userObj})
        },
        getUser:()=>{
            dispatch({type:"GET_USER"})
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reg);