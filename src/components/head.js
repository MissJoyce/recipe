import React, { Component } from 'react'
import {Link} from "react-router";
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
class Head extends Component {
    constructor(){
        super();
        this.state={
            text:"",
            text1:"",
            searchList:[],
            href:"",
            now:-1,
        }
        this.changeSearch=this.changeSearch.bind(this);
        this.show=this.show.bind(this);
    }
    render() {
        let {search} = this.props;

        return (
            <header className="mui-bar mui-bar-nav header" id="headNav">
                <Link to="/create" className="mui-pull-left mui-btn-link"><i className="iconfont">&#xe608;</i></Link>
                <h1 className="mui-title">
                    <div className="mui-input-row mui-search">
                        <input type="search" className="mui-input-clear" placeholder="请输入菜谱、用户、美食" value={this.state.text} onChange={this.changeSearch} onKeyUp={this.show}/>
                        <ul className="search">
                            {this.state.searchList.map((item,index)=>{
                                return(<li key={index} className={(index===this.state.now)?"bgColor":""}>{item}</li>)
                            })}
                        </ul>
                    </div>
                </h1>
                <Link to="/email" className="mui-pull-right mui-btn-link"><i className="iconfont">&#xe61c;</i></Link>
            </header>
        )
    }
    changeSearch(ev){
        this.setState({
            text:ev.target.value
        })
        this.props.search(this,ev.target.value);
    }
    show(e){
        let num = this.state.now;
        console.log("now1",num)
        let list = this.state.searchList;
        //down
        if(e.keyCode===40){
            ++num;
            this.setState({
                now:num,
                text:list[num]
            });
            //当now=list.length时，失去光标，再按一次重新开始
            if(num===list.length){
                num=-1;
                this.setState({
                    now:num,
                    text:this.state.text1
                })
                return;
            }
        }
        if(e.keyCode===38){
            --num;
            if(num<-1){
                num=list.length-1;
            }
            //当now=-1时，失去光标，再按一次重新开始
            if(num===-1){
                this.setState({
                    now:num,
                    text:this.state.text1
                })
                return;
            }
            this.setState({
                now:num,
                text:list[num]
            }); 
        }

        if(e.keyCode===13){
            const href="https://www.baidu.com/s?wd="+this.state.text;            
            window.open(href);
            this.setState({
                text:"",
                searchList:[]
            })
        }
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {}
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        search:(_this,val)=>{
            var url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val;
            // dispatch({type:"SEARCH",payload:data});
            fetchJsonp(url,{jsonpCallback:"cb"}).then(
                res=>res.json()
            ).then(
                (data)=>{
                    // console.log(data);
                    if(data.s.length>4){
                        data.s.splice(data.s.length-4);
                    }

                   _this.setState({
                       searchList:data.s,
                    //    href:href,
                       now:-1,
                       text1:val
                    })
                }
            )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Head)


