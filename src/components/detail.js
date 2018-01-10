import React, { Component } from 'react'
import "../assets/css/detail.css";
import {connect} from "react-redux";
import Swipe from "./swipe";
import {Link,hashHistory} from "react-router";

class Detail extends Component {
    constructor(){
        super();
        this.state={
            list:{}
        }
    }
    render() {
        let title=this.props.location.query.title;
        let arr = this.state.list;
        let {loginSuccess} =this.props;
        return (
            <div>
                <div id="top">
                    <a className="go_back white" onClick={()=>{hashHistory.go(-1)}}>返回</a>
                    <h2>{title}/{arr.title}</h2>
                    <Link to="/home" className="top_set"></Link>
                </div>
                <Swipe/>
                         
                <div className="product_detail" key={arr.id}>
                    <p><img src={arr.userImg} />{arr.username}</p>
                    <p>{arr.p}</p>
                    <div className="price">价格￥:<span>{arr.price}.00</span></div>
                </div>
                <div id="num">
                    <i>数量：</i>
                    <span className="btn_num">
                        <a href="javascript:;" onClick={this.add.bind(this,{id:arr.id,n:-1})}><img src="src/assets/images/btn_less.jpg" /></a>
                        <span className="num">{arr.num}</span>
                        <a href="javascript:;" onClick={this.add.bind(this,{id:arr.id,n:1})}><img src="src/assets/images/btn_add.jpg" /></a>
                    </span>
                </div>
               
                <div className="com">图文详情<a href="#" className="iconfont">&#xe604;</a></div>
                <div className="com">评价<a href="#" className="iconfont">&#xe604;</a></div>
                <div className="h65"></div>
                <div className="buyBox">
                    <Link to="/category" id="goCarts">
                        <img src="src/assets/images/img_cart2.png" title="菜谱" alt="菜谱" />
                    </Link>
                    <div className="buyBtn">
                        <a className="carts" onClick={this.addRecipe.bind(this,arr)}>加入菜谱</a>
                        <Link to="/category" className="buy">购买</Link>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        this.props.showLoading();
        let url="src/data/detail.json";
        fetch(url).then(
            res=>res.json()
        ).then(
            data=>{
                // console.log(data)
                setTimeout(()=>{
                    this.props.hideLoading();
                    this.props.setDetail(data);
                    let index=parseInt(this.props.location.query.id)-1;
                    this.setState({list:data[index]})
                },500)
            }
        );
    }
    // ++/--
    add(data){
        this.props.changeDetail(data);
        let {obj} = this.props;
        let index=parseInt(data.id)-1;
        this.setState({
            list:obj[index]
        })
    }
    addRecipe(data){
        if(localStorage.username){
            this.props.setBuycart(data);
        }else{
            alert("您还没有登录");
        }
            
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        obj:state.detailData,
        loginSuccess:state.loginSuccess
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        showLoading:()=>{
            dispatch({type:"SHOW_LOADING"})
        },
        hideLoading:()=>{
            dispatch({type:"HIDE_LOADING"})
        },
        setDetail:(data)=>{
            dispatch({type:"SET_DETAIL_DATA",payload:data})
        },
        changeDetail:(data)=>{
            dispatch({type:"CHANGE_DETAIL",payload:data})
        },
        setBuycart:(data)=>{
            dispatch({type:"GET_BUYCART_DATA"})
            setTimeout(()=>{
                dispatch({type:"SET_BUYCART",payload:data})
            },0)
            
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)



