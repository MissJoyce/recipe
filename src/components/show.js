import React, { Component } from 'react';
import {connect} from "react-redux";
import "../assets/js/jaliswall.js";

class Show extends Component {
    constructor(){
        super();
        this.state={}
        this.show=this.show.bind(this)
    }
    render() {
        // this.props.router.push("/show");
        let {show} =this.props;
        // console.log(show)
        return (
            <div className="showBox">
                <header className="mui-bar mui-bar-nav header" id="showHead">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{this.props.router.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">Show秀</h1>
                </header>
                <div className="h57"></div>
                <div className="wrapper">
                    <ul className="wall">
                        <li className="article">
                            <a href="">
                                <img src="src/assets/images/1.png" alt=""/>
                            <p>蛋挞搭配下午茶，非常惬意</p>
                            </a>
                        </li>
                        <li className="article">
                            <a href="">
                                <img src="src/assets/images/tx.jpg"  alt=""/>
                                <p>橘子布丁酸甜可口</p>
                            </a>
                        </li>
                        <li className="article">
                            <a href="">
                                <img src="src/assets/images/t1.png" alt="" />
                                <p>色香味俱全</p>
                            </a>
                        </li>
                        <li className="article">
                            <a href="">
                                <img src="src/assets/images/4.png"  alt=""/>
                                <p>香浓滑腻可口</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <a className="show"  onClick={this.show}><i className="iconfont">&#xe633;</i>秀出我的美食</a>
                <div id="picture" className={show?"startShow":"stopShow"}>
                    <ul className="mui-table-view">
                        <li className="mui-table-view-cell">
                            <a href="">拍照或录像</a>
                        </li>
                        <li className="mui-table-view-cell">
                            <a href="">选取现有的</a>
                        </li>
                    </ul>
                    <ul className="mui-table-view">
                        <li className="mui-table-view-cell">
                            <a onClick={this.show}><b>取消</b></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    show(){
        // console.log(this)
        this.props.showing();
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {show:state.show}
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        showing:()=>{
            dispatch({type:"SHOWING"})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)