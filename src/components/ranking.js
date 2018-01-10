import React, { Component } from 'react'

export default class Ranking extends Component {
    render() {
        return (
            <div className="rank">
                <header className="mui-bar mui-bar-nav header">
                    <a  className="mui-pull-left mui-btn-link" onClick={()=>{window.history.go(-1)}}><i className="iconfont">&#xe723;</i></a>
                    <h1 className="mui-title">排行榜</h1>
                </header>
                <div className="h57"></div>
                <div className="mui-content ranking">
                    <h3>5月份最近<a href="" className="fr"><i className="iconfont">&#xe61f;</i></a></h3>
                    <div className="mui-row">
                        <div className="mui-col-sm-6 mui-col-xs-12">
                            <li className="mui-table-view-cell">
                                <a href="">
                                    <img src="src/assets/images/t1.png" alt=""/>
                                    <h2>秘制台式卤肉饭</h2>
                                    <p>dear小鲁</p>
                                </a>
                            </li>
                        </div>
                        <div className="mui-col-sm-6 mui-col-xs-12">
                            <li className="mui-table-view-cell">
                                <a href="">
                                    <img src="src/assets/images/t2.png" alt=""/>
                                    <h2>黑椒糖醋排骨</h2>
                                    <p>dear小鲁</p>
                                </a>
                            </li>
                        </div>
                    </div>
                    <h3>编辑优选<a href="" className="fr"><i className="iconfont">&#xe61f;</i></a></h3>
                    <div className="mui-row">
                        <div className="mui-col-sm-6 mui-col-xs-12">
                            <li className="mui-table-view-cell">
                                <a href="">
                                    <img src="src/assets/images/t3.png" alt=""/>
                                    <h2>秘制台式卤肉饭</h2>
                                    <p>dear小鲁</p>
                                </a>
                            </li>
                        </div>
                        <div className="mui-col-sm-6 mui-col-xs-12">
                            <li className="mui-table-view-cell">
                                <a href="">
                                    <img src="src/assets/images/t4.png" alt=""/>
                                    <h2>黑椒糖醋排骨</h2>
                                    <p>dear小鲁</p>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="h65"></div>
            </div>
        )
    }
}
