import React, { Component } from 'react'
import {Link} from "react-router";
import {connect} from "react-redux";

class Eat extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[]
        }

    }
    render() {
         let {current,}=this.props;
        let list = this.state.arr;
        return (
            <div id="eat">
                <header className="mui-bar mui-bar-nav header" id="eatHead">
                    <Link to="/create" className="mui-pull-left mui-btn-link"><i className="iconfont">&#xe625;</i></Link>
                    <h1 className="mui-title">食话</h1>
                    <Link to="/email" className="mui-pull-right mui-btn-link"><i className="iconfont">&#xe61c;</i></Link>
                </header>
                <div className="h57"></div>
                <div className="banner"><img src="src/assets/images/eat.png" alt=""/></div>
                <ul className="nav">
                    <li>
                        <a href="">
                            <img src="src/assets/images/1_03.png" alt=""/>
                            <p>烘焙时光</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="src/assets/images/1_05.png" alt=""/>
                            <p>美食课堂</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="src/assets/images/1_07.png" alt=""/>
                            <p>家庭共享</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="src/assets/images/1_09.png" alt=""/>
                            <p>最新活动</p>
                        </a>
                    </li>
                </ul>
                <ul className="m-bar">
                    <li className={current.now?"active":""}><a onClick={this.card.bind(this,"lasted")}>最新</a></li>
                    <li className={current.pre?"active":""}><a  onClick={this.card.bind(this,"hot")}>最热</a></li>
                </ul>
                <ul className="eat">
                {list.map((item,index)=>{
                    return(
                        <li key={item.id}>
                            <div className="eat-top">
                                <img src={item.src} alt=""/>
                                <div className="eat-top-text">
                                    <h2>{item.name}</h2>
                                    <p>粉丝数 {item.num}</p>
                                </div>
                                <div className="btn">+关注</div>
                            </div>
                            <div className="eat-middle">
                                {item.p}
                            </div>
                            <div className="eat-img">
                                <img src={item.img1} alt=""/>
                                <img src={item.img2} alt=""/>
                                <img src={item.img3} alt=""/>
                            </div>
                            <div className="eat-bot">
                                <span className="fl">发布于{item.time}</span>
                                <div className="fr">
                                    <i className="iconfont">&#xe62f;</i>{item.zan}
                                    <i className="iconfont">&#xe601;</i>{item.msg}
                                </div>
                            </div>
                        </li>
                    )
                })}
                    
                </ul>
                <div className="h65"></div>
            </div>
        )
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        this.props.showLoading();
        let url='src/data/card_lasted.json';
        fetch(url).then(
            res=>res.json()
        ).then(
            data=>{
                
                setTimeout(()=>{
                    this.props.hideLoading()
                    this.setState({
                        arr:data.data
                    })
                },500);
            }
        );
    }
    card(str){
        this.props.showLoading();
        this.props.cardActive();
        let url=`src/data/card_${str}.json`;
        fetch(url).then(
            res=>res.json()
        ).then(
            data=>{
                setTimeout(()=>{
                    this.props.hideLoading()
                    // console.log(data);
                    // console.log(this);
                    this.setState({
                        arr:data.data
                    })
                },500);
                
            }
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        current:state.card
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        /* eatCard:()=>{
            dispatch({type:"LASTED"})
        } */
        showLoading:()=>{
            dispatch({type:"SHOW_LOADING"})
        },
        hideLoading:()=>{
            dispatch({type:"HIDE_LOADING"})
        },
        cardActive:()=>{
            dispatch({type:"CARD_ACTIVE"});
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eat)