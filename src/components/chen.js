import React from 'react';
import {connect} from "react-redux";
class Detail extends React.Component{
	constructor(){
		super()
		this.state={
			pageData:{}
		}
	}
    render(){
		let pageData=this.state.pageData
		let {sendCar,changeNum}=this.props
        return (
        <div>
			<nav>
				<div className="pc-nav-d">
					<div className="center">
						<a href="javascript:;">美妆个护</a> >
						<a href="javascript:;">面部护肤</a> >
						<a href="javascript:;">套装</a> >
						<a href="javascript:;">欧莱雅（LOREAL）</a> >
						<a href="javascript:;">欧莱雅套装</a>
					</div>
				</div>
			</nav>
			<div className="Xcontent">
				<ul className="Xcontent01">

					<div className="Xcontent06"><img src={pageData.src1}/></div>
					<ol className="Xcontent08">
						<div className="Xcontent07"><img src={pageData.src1}/></div>
						<div className="Xcontent09"><img src={pageData.src2}/></div>
						<div className="Xcontent10"><img src={pageData.src3}/></div>
						<div className="Xcontent11"><img src={pageData.src4}/></div>
						<div className="Xcontent12"><img src={pageData.src5}/></div>
					</ol>
					<ol className="Xcontent13 clearfix">
						<div className="Xcontent14 clearfix"><a href="javascript:;"><p>{pageData.title}</p></a></div>
						<div className="Xcontent15 clearfix red fl" style={{marginTop:"2px"}}>新品上架</div>
						<div className="Xcontent16 clearfix"><p style={{margin:"0"}}>美妆护肤放肆购，你值得拥有！更多惊喜</p></div>
						<div className="Xcontent17">
							<p className="Xcontent18">售价</p>
							<p className="Xcontent19">￥<span>{pageData.price}</span></p>
							<div className="Xcontent20">
								<p className="Xcontent21">促销</p>
								<img src="/src/assets/images/shangpinxiangqing/X12.png"/>
								<p className="Xcontent22">{pageData.promotion}</p>
							</div>
							<div className="Xcontent23">
								<p className="Xcontent24">服务</p>
								<p className="Xcontent25">30天无忧退货&nbsp;&nbsp;&nbsp;&nbsp;       48小时快速退款 &nbsp;&nbsp;&nbsp;&nbsp;        满88元免邮</p>
							</div>
						</div>
						<div className="Xcontent26">
							<p className="Xcontent27">颜色</p>
							<div className="Xcontent28"><img  src={pageData.src1}/></div>
							<div className="Xcontent29"><img  src={pageData.src2}/></div>
						</div>
						<div className="Xcontent30">
							<p className="Xcontent31">数量</p>
							<div className="Xcontent32"><img src="/src/assets/images/shangpinxiangqing/X15.png" onClick={()=>{changeNum(this,"minus")}}/></div>
							<form><input className="input" value={pageData.num} onChange={changeNum}/></form>
							<div className="Xcontent33"><img src="/src/assets/images/shangpinxiangqing/16.png" onClick={()=>{changeNum(this,"add")}}/></div>
						</div>
						<div className="Xcontent34"><a href="javascript:;">立即购买</a></div>
						<div className="Xcontent35"><a href="javascript:;" onClick={()=>{sendCar(pageData)}}>加入购物车</a></div>
					</ol>
				</ul>
			</div>
        </div>
        )
	}
	componentDidMount(){
		let _this=this;
        this.props.async("http://localhost:3000/pageList",pageData,_this)
	}
}

const mapStateToProps=(state,ownProps)=>{
      return {
		bShopList:state.bShopList
	  }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        "async":(src,temp,_this)=>{
			var params = new URLSearchParams();
			params.append("id",_this.props.params.id);
            dispatch({type:'SHOW_LOADING'});
            fetch(src,{
                method: 'post',
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded'
				  },
				body:params
                }).then(
                res=>res.json()
            ).then(
                data=>{

                   _this.setState({[temp]:data.msg});
                   dispatch({type:'HIDE_LOADING'});
                }
            )
		},
		"sendCar":(data)=>{
			console.log(data)
			dispatch({type:"SEND_SHOPLIST",payload:data})
		},
		"changeNum":(_this,type)=>{
			let pageData1 = Object.assign({},_this.state.pageData)
			if(type=="add"){
				pageData1.num++;
				_this.setState({pageData:pageData1})
			}
			if(type=="minus"){
				pageData1.num<=1? pageData1.num:pageData1.num--;
				_this.setState({pageData:pageData1})
			}
		}
    }	
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Detail)
