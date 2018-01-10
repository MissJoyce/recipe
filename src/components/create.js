import React, { Component } from 'react'

export default class Create extends Component {
    render() {
        return (
            <div className="create">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{this.props.router.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">创建菜谱</h1>
                </header>
                <div className="h57"></div>
                <div className="hp">
                    <img src="src/assets/images/hp.jpg" alt=""/>
                </div>
                <div className="c-title">
                    <h2>辣椒炒皮蛋</h2>
                    <p>(添加美食故事，记得分享朋友圈哦)</p>
                </div>
                <div className="c-title">
                    <h2>用料</h2>
                    <p>皮蛋、杭椒、干辣椒、辣豆豉、生抽、油</p>
                </div>
                <div className="c-title">
                    <h2>做法</h2>
                    <p>步骤一将皮蛋去壳，然后切成块备用；将杭椒切成节、干辣椒切成节。</p>
                    <p><img src="src/assets/images/hp.jpg" alt=""/></p>
                    <p>步骤二将皮蛋去壳，然后切成块备用；将杭椒切成节、干辣椒切成节。</p>
                    <p><img src="src/assets/images/hp.jpg" alt=""/></p>
                </div>
                <div className="h65"></div>
                <a className="show" href="">发布菜谱</a>
            </div>
        )
    }
}
