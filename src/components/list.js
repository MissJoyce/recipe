import React, { Component } from 'react'
import {hashHistory,Link} from "react-router";
import {connect} from "react-redux";
class List extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render() {
        let title = this.props.location.query.title;
        let arr=this.state.list;
        return (
            <div id="list">
                <header className="mui-bar mui-bar-nav header" id="listHead">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{hashHistory.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">{title}</h1>
                </header>
                <div className="h57"></div>
                <ul className="list">
                {arr.map((item,index)=>{
                    return(
                        <li key={item.id}>
                            <Link to={{pathname:"/detail/"+item.id,query:{title:title,id:item.id}}}>
                                <img src={item.indexImg} alt=""/>
                                <h2>{item.h2}</h2>
                                <p>{item.p}</p>
                                <div className="list-photo">
                                    <img src={item.userImg} alt=""/>
                                    <p>{item.username}</p>
                                    <p>{item.num}人做过</p>
                                </div>
                            </Link>
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
        let url="src/data/list.json";
        fetch(url).then(
            res=>res.json()
        ).then(
            data=>{
                // console.log(this.props.params); // id:
                // console.log(this.props.location.query);  //title:                
                // console.log(data)
                setTimeout(()=>{
                    this.props.hideLoading();
                    // var index = parseInt(this.props.params.id)-1;
                    var index = parseInt(this.props.location.query.id)-1;
                    this.setState({
                        list:data.data[index].arr
                    })
                },500)
                
            }
        )
    }
}


const mapStateToProps=(state,ownProps)=>{
    return {}
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
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
)(List);