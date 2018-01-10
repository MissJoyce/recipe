import React, { Component } from 'react'
import "../assets/css/category.css";
import {hashHistory,Link} from "react-router";
import {connect} from "react-redux";
import getPrice from "../filter/getPrice";
import { setTimeout } from 'timers';
class Category extends Component {
    constructor(){
        super();
        this.state={
            arr:[]
        }
        this.clear=this.clear.bind(this);
        this.del=this.del.bind(this);
        this.add=this.add.bind(this)
    }
    render() {
        // var list=this.state.arr;
        let {totalPrice,list} = this.props;
        return (
            <div className="category">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{hashHistory.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">{localStorage.username}</h1>
                    <a  className=" mui-pull-right mui-btn-link" onClick={this.clear}>清空</a>
                </header>
                <div className="h57"></div>
                {/* <!-- 主页面容器 --> */}
                <div className="mui-inner-wrap">
                    <div className="cate-title">
                        <span className="fl">已添加{list.length}个菜谱</span>
                        {/* <a className="mui-icon mui-action-menu mui-icon-bars mui-pull-right"  href="#offCanvasSide" ></a> */}
                        <a className="menu fr"><img src="src/assets/images/menu.png" alt=""/></a>
                    </div>
                    <div className="mui-content mui-scroll-wrapper" >
                        <ul className="mui-table-view emali">
                        {
                            list.map((item,index)=>{
                                return(
                                    <li className="mui-table-view-cell mui-media" key={index}>
                                            <div className="img fl">
                                            <Link to={{pathname:"/detail/"+item.id,query:{title:item.title,id:item.id}}}>
                                                <img className="mui-media-object mui-pull-left" src={item.userImg} alt=""/>
                                                <p>{item.title}</p>
                                            </Link>
                                            </div>
                                            <div className="mui-media-body">
                                                <i onClick={this.del.bind(null,item.id)}>删除</i>
                                                <i>￥:{getPrice(item.price,item.num)}</i>
                                                <div className="buycart">
                                                    <input type="button" value="-" onClick={this.add.bind(null,{id:item.id,n:-1})}/>
                                                    <span>{item.num}</span>
                                                    <input type="button" value="+" onClick={this.add.bind(null,{id:item.id,n:1})}/>
                                                </div>
                                                <i className="total">￥:{item.price}.00</i>
                                            </div>
                                    </li>
                                )
                            })
                        }
                           
                        </ul>
                    </div> 

                </div>
                <div className="fixed">
                    <div className="accounts">
                        <span>已优惠:<i>￥0.00</i></span>
                        <span>总计:<i className="totalM">￥{totalPrice}</i></span>
                        <a href="#" className="count">立即结算</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getBuycartSata();
        this.getData();
        this.props.getTotalPrice();
    }
    getData(){
        var _this=this;
        setTimeout(()=>{
            let {list} = _this.props;    
            // console.log("list",list);     
            _this.setState({
                arr:list
            })
        },0)
    }
    add(data){
        this.props.changeNum(data);
        this.getData();
    }
    clear(){
        this.props.clearBuycart();
        this.getData()
    }
    del(data){
        this.props.delBuycart(data);
        this.getData()
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
        list:state.buycart,
        totalPrice:state.totalPrice
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        getBuycartSata:()=>{
            dispatch({type:"GET_BUYCART_DATA"})
        },
        changeNum:(data)=>{
            dispatch({type:"CHANGE_NUM",payload:data});
            dispatch({type:"GET_TOTAL_PRICE"})
        },
        clearBuycart:()=>{
            dispatch({type:"CLEAR_BUYCART"})
            dispatch({type:"GET_TOTAL_PRICE"})
        },
        delBuycart:(data)=>{
            dispatch({type:"DEL_BUYCART",payload:data})
            dispatch({type:"GET_TOTAL_PRICE"})
        },
        getTotalPrice:()=>{
            dispatch({type:"GET_TOTAL_PRICE"})
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)


