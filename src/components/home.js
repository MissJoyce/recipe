import React, { Component } from 'react';
import {Link} from "react-router";
import Swipe from "./swipe";

import {connect} from "react-redux";

class Home extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    render() {
        let arr=this.state.list;
        // console.log(arr)
        return (
            <div id="home">
                <div className="h57"></div>
                <Swipe/>
                <ul className="nav">
                    <li>
                        <Link to="/category">
                            <img src="src/assets/images/icon.png" alt=""/>
                            <p>菜谱</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/video">
                            <img src="src/assets/images/icon1.png" alt=""/>
                            <p>教学视频</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ranking">
                            <img src="src/assets/images/icon2.png" alt=""/>
                            <p>排行榜</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/show">
                            <img src="src/assets/images/icon3.jpg" alt=""/>
                            <p>Show秀</p>
                        </Link>
                    </li>
                </ul>
                <ul className="index-list">
                    {arr.map((item,index)=>{
                        return (
                            <li key={item.id}>
                                <Link to={{pathname:'/list/'+item.id,query:{title:item.title,id:item.id}}}>
                                    <img src={item.indexImg} alt=""/>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="h65"></div>
            </div>
        )
    };
    componentDidMount(){
        this.props.router.replace("/home");
        this.getData();
    }
    getData(){
        this.props.showLoading();
        let url="src/data/index-list.json";
        fetch(url).then(
            res=>res.json()
        ).then(
            (data)=>{
                setTimeout(
                    ()=>{
                        this.props.hideLoading();
                        // console.log(data.data)
                        this.setState({
                            list:data.data
                        });
                    },500)
            }
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{}
};
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        showLoading:()=>{
            dispatch({type:"SHOW_LOADING"})
        },
        hideLoading:()=>{
            dispatch({type:"HIDE_LOADING"})
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(Home);