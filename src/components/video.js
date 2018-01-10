import React, { Component } from 'react'
import "../assets/css/video.css";
import $ from "jquery";
import {connect} from "react-redux";
class Video extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
        this.play=this.play.bind(this);
    }
    render() {
        
        return (
            <div className="videoBox">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{this.props.router.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">视频专区</h1>
                </header>
                <div className="h57"></div>
                <div className="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
                    <div className="mui-scroll">
                        <a className="mui-control-item mui-active">最新 </a>
                        <a className="mui-control-item">最热</a>
                        <a className="mui-control-item">烘焙 </a>
                        <a className="mui-control-item">异国</a>
                        <a className="mui-control-item">家常</a>
                        <a className="mui-control-item">冷菜</a>
                    </div>
                </div>
                <h2 className="title"><i className="iconfont fl">&#xe6b6;</i> 视频达人</h2>
                <ul className="video">
                    <li>
                        <a href="javascript:;">
                            <img src="src/assets/images/tx.jpg" alt=""/>
                            <p>疯狂的辣椒</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="src/assets/images/tx.jpg" alt=""/>
                            <p>味道先锋</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="src/assets/images/tx.jpg" alt=""/>
                            <p>诗句可</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="src/assets/images/tx.jpg" alt=""/>
                            <p>晓日报</p>
                        </a>
                    </li>
                </ul>
                
                <ul className="video-list">
                {this.state.list.map((item,index)=>{
                    return (
                        <li key={item.id}>
                            <a href="javascript:;">
                                <video src={item.src} className="v1"  poster="src/assets/images/play.png" onClick={this.play.bind(null,item.id)}></video>
                                <div className="text">
                                    <h2>{item.desc}</h2>
                                    <p>{item.review}人浏览-{item.like}人收藏</p>
                                </div>
                                <div className="pic">
                                    <img src={item.headImg} alt=""/>
                                    <p>{item.username}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
                     
                </ul>
                <div className="h65"></div>
            </div>
        )
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        this.props.showLoading()
        let url="src/data/video.json";
        fetch(url).then(
            res=>res.json()
        ).then(
            (data)=>{
              setTimeout(()=>{
                  this.props.hideLoading();
                  this.setState({
                      list:data
                  })
              },1000)
            }
        )
    }
    play(id){
        this.props.changePlay(id);
        setTimeout(()=>{
            let {play1,play2,play3} = this.props;
            // console.log(play1,play2,play3);        
            if(play1){
                $(".v1")[0].play();
            }else{
                $(".v1")[0].pause();
            }
            if(play2){
                $(".v1")[1].play();
            }else{
                $(".v1")[1].pause();
            }
            if(play3){
                $(".v1")[2].play();
            }else{
                $(".v1")[2].pause();
            }
            
        },0)
        
       
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        play1:state.play1,
        play2:state.play2,
        play3:state.play3,
        videoData:state.video
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
        changePlay:(id)=>{
            dispatch({type:"CHANGE_PLAY",payload:id})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Video)
