import React, { Component } from 'react';
import Head from "./head";
import Foot from "./foot";
import Loading from "./loading";

import {connect} from "react-redux";

class App extends Component {
    
    render() {
        let {bNav,bFoot,showNav,hideNav,showFoot,hideFoot,bLoading} =this.props;
        let path=this.props.location.pathname;

        if(/home/.test(path)){
            setTimeout(showNav,0);
            setTimeout(showFoot,0);
        }
        if(/ranking|video|list|eat|user|create/.test(path)){
            setTimeout(hideNav,0);
            setTimeout(showFoot,0);
        }
        if(/category|message|email|show|reg|login|error|detail/.test(path)){
            setTimeout(hideNav,0);
            setTimeout(hideFoot,0);
        }
        return (
            <div className="app"> 
                {bLoading?<Loading/>:undefined}
                {bNav?<Head/>:undefined}
                {this.props.children}
                {bFoot?<Foot/>:undefined}
            </div>
        )
    }
}

//状态state里来的属性都在这个函数里，ownProps是挂在组件是可能传递过来的属性
const mapStateToProps=(state,ownProps)=>{
    return {
        bNav:state.bNav,
        bFoot:state.bFoot,
        bLoading:state.bLoading
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        showNav:()=>{
            dispatch({type:"SHOW_NAV"});
        },
        hideNav:()=>{
            dispatch({type:"HIDE_NAV"});
        },
        showFoot:()=>{
            dispatch({type:"SHOW_FOOT"});
        },
        hideFoot:()=>{
            dispatch({type:"HIDE_FOOT"});
        },
        showLoading:()=>{
            dispatch({type:'SHOW_LOADING'});
        },
        hideLoading:()=>{
            dispatch({type:'HIDE_LOADING'});
        }
    }
}

//connect是一个函数，执行的结果返回一个函数
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
