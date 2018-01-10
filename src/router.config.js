import React from "react";
import {Router,Route,hashHistory,browserHistory,IndexRoute,Redirect} from 'react-router';

import App from "./components/App";
import Home from "./components/home";
import List from "./components/list";
import Detail from "./components/detail";
import Category from "./components/category";
import Create from "./components/create";
import Eat from "./components/eat";
import Email from "./components/email";
import Message from "./components/message";
import Ranking from "./components/ranking";
import Video from "./components/video";
import Show from "./components/show";
import User from "./components/user";
import Login from "./components/login";
import Reg from "./components/reg";
import Error from "./components/error"

const RouterConfig=()=>(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="list" component={List}>
                <Route path=":id" component={List}/>
            </Route>
            <Route path="detail" component={Detail}>
                <Route path=":id" component={Detail}/>
            </Route>
            <Route path="category" component={Category}/>
            <Route path="create" component={Create}/>
            <Route path="eat" component={Eat}/>
            <Route path="email" component={Email}/>            
            <Route path="message" component={Message}/>
            <Route path="ranking" component={Ranking}/>
            <Route path="video" component={Video}/>
            <Route path="show" component={Show}/>
            <Route path="user" component={User}/>
            <Route path="login" component={Login}/>
            <Route path="reg" component={Reg}/>   
            <Route path="*" component={Error}/>  
        </Route>
    </Router>
);

export default RouterConfig;


