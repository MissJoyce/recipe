import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/style.css";

import RouterConfig from './router.config';
//状态管理
import {createStore} from "redux"; //打造容器组件
import {Provider} from "react-redux";
import defaultState from "./store/state";
import reducer from "./store/reducer";


import axios from "axios";
//全局配置携带跨源凭证
axios.defaults.withCredentials=true;  
// React.prototype.$http=axios;

import "animate.css";


//创建store对象,把reducer和state传入
const store = createStore(reducer,defaultState);
ReactDOM.render(
    <Provider store={store}>
        <RouterConfig/> 
    </Provider>,
document.getElementById('root'));

