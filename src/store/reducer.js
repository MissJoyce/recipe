import defaultState from "./state";
import axios from "axios";
// import { stat } from "fs";
const reducer =(state=defaultState,action)=>{
    let {type,payload} = action;  //提交的请求类型和负载
    switch(type){
        case "SHOW_NAV":
            return Object.assign({},state,{
                bNav:true
            });
            break;
        case "HIDE_NAV":
            return Object.assign({},state,{
                bNav:false
            });
            break;
        case "SHOW_FOOT":
            return Object.assign({},state,{
                bFoot:true
            });
            break;
        case "HIDE_FOOT":
            return Object.assign({},state,{
                bFoot:false
            });
            break;
        case "SHOW_LOADING":
            return Object.assign({},state,{
                bLoading:true
            });
            break;
        case "HIDE_LOADING":
            return Object.assign({},state,{
                bLoading:false
            });
            break;
        // show页面 
        case "SHOWING":
            return Object.assign({},state,{
                show:!state.show
            });
            break;
    
        // video页面选项卡
        case "CARD_ACTIVE":
            return Object.assign({},state,{
                card:{now:!state.card.now,pre:!state.card.pre}
            });
            break;
        //详情页加载完毕，将请求到的数据存到状态管理
        case "SET_DETAIL_DATA":  
            return Object.assign({},state,{
                detailData:payload
            });
            break;
        //详情点击++/--
        case "CHANGE_DETAIL":
            state.detailData.forEach((item,index)=>{
                if(item.id==payload.id){
                    if(item.num==1&&payload.n==-1){
                        return;
                    }
                    if(item.num<1){
                        item.num=1;
                    }else{
                        item.num+=payload.n;
                    }
                }
            });
            return Object.assign({},state,{
                detailData:state.detailData
                // buycart:state.buycart
            });
            break;
        //用户登录成功,购物车页面 取出相应用户的buycart列表
        case "GET_BUYCART_DATA":
            const obj2={buycart:state.buycart,username:localStorage.username,type:"doc"};
            axios({
                url:"http://localhost:3000/buycart",
                method:"GET",
                params:obj2
            }).then(
                (res)=>{
                    // console.log(res.data,"购物车页面渲染");  //{error:0,data:result.buycart}
                    var tempArr=[];
                    res.data.data.forEach((temp,index)=>{
                       var item=JSON.parse(temp);
                       tempArr.push(item);
                   })
                    state.buycart=tempArr;
                    return Object.assign({},state,{
                        buycart:state.buycart
                    })
                    // console.log(state.buycart,"mybuycart")
                }).catch((res)=>{console.log("用户数据表请求错误！")})
            return state;
            break;
        // 详情点击加入菜单,将当前商品信息添加至库中
        case "SET_BUYCART":
            let add = false;
            state.buycart.forEach((item,index)=>{
                if(item.id==payload.id){
                    item.num+=payload.num;
                    add=true;
                }
            })
            if(!add){
                state.buycart.push(payload);
            }
            // console.log(state.buycart);
            const obj={buycart:state.buycart,username:localStorage.username,type:"join"};
            axios({
                url:"http://localhost:3000/buycart",
                method:"GET",
                params:obj
            }).then(
             (res)=>{
                //  console.log(res.data,"添加至购物车"); //{error:0,data:result.buycart}
                 var tempArr=[];
                 res.data.data.forEach((temp,index)=>{
                    var item=JSON.parse(temp);
                    tempArr.push(item);
                })
                 state.buycart=tempArr;
                }).catch((res)=>{console.log("用户数据表请求错误！")})
            return Object.assign({},state,{
                buycart:state.buycart
            })
            break;
        //购物车++/--
        case "CHANGE_NUM":
            state.buycart.forEach((item,index)=>{
                if(item.id==payload.id){
                    if(item.num==1&&payload.n==-1){
                        return;
                    }
                    if(item.num<1){
                        item.num=1;
                    }else{
                        item.num+=payload.n;
                    } 
                }
            })
            // console.log(state.buycart,"++--")
            const obj3={buycart:state.buycart,username:localStorage.username,type:"join"};            
            axios({
                url:"http://localhost:3000/buycart",
                method:"GET",
                params:obj3
            }).then(
             (res)=>{
                //  console.log(res.data,"购物车++/--");  //{error:0,data:result.buycart}
                var tempArr=[];
                res.data.data.forEach((temp,index)=>{
                   var item=JSON.parse(temp);
                   tempArr.push(item);
               })
                state.buycart=tempArr;
                // Object.assign({},state,{
                //     buycart:state.buycart
                // })
            }).catch((res)=>{console.log("用户数据表请求错误！")})
            return Object.assign({},state,{
                buycart:state.buycart
            })
            break;
        // 清空购物车
        case "CLEAR_BUYCART":
            const obj4={buycart:[],username:localStorage.username,type:"join"};        
            axios({
                url:"http://localhost:3000/buycart",
                method:"GET",
                params:obj4
            }).then(
                (res)=>{
                    // console.log(res.data.data) //undefined
                    state.buycart=[];
                    // console.log(state.buycart,"mybuycart")
                }).catch((res)=>{console.log("用户数据表请求错误！")})
            return Object.assign({},state,{
                buycart:[]
            })
            break;
        // 删除某一项
        case "DEL_BUYCART":
            state.buycart.forEach((item,index)=>{
                if(item.id===payload){
                    state.buycart.splice(index,1);
                }
            })
            const obj5={buycart:state.buycart,username:localStorage.username,type:"join"};        
            axios({
                url:"http://localhost:3000/buycart",
                method:"GET",
                params:obj5
            }).then(
                (res)=>{
                    // console.log(res.data.data) //undefined
                    var tempArr=[];
                    res.data.data.forEach((temp,index)=>{
                        var item=JSON.parse(temp);
                        tempArr.push(item);
                    })
                    state.buycart=tempArr;
                    Object.assign({},state,{
                        buycart:state.buycart
                    })
                    // console.log(state.buycart,"mybuycart")
                }).catch((res)=>{console.log("用户数据表请求错误！")})
            return state;
            break;
        case "GET_TOTAL_PRICE":
            let sum = 0;
            state.buycart.forEach((item,index)=>{
                sum+=item.price*item.num;
            })
            state.totalPrice=sum;
            return Object.assign({},state,{
                totalPrice:state.totalPrice
            })
            break;
        //登录页  获取数据库中user表数据存到状态管理user[]中
        case "GET_USER":
            axios({
                url:"http://localhost:3000/users",
                method:"get",
            }).then((res)=>{
                // console.log(res.data);
                state.user=res.data
                Object.assign({},state,{
                    user:state.user
                });
                // console.log(state.user);
            }).catch((res)=>{console.log("用户数据表请求错误！")})
            return state;
            break;
        // 注册 
        // 账号
        case "REG_NAME":
            if(payload.length>0){
                if(/^\D(.)*/.test(payload)){
                    console.log("ok",payload);  
                    console.log("regname",state.user); 
                    if(state.user.length<1){
                        state.userObj.username=payload;
                        console.log("konguser", state.userObj);
                    }else{
                        state.user.forEach((item,index)=>{
                            if(item.username==payload){
                                 alert("用户名已存在");
                                 console.log("账户已存在");
                             }else{
                                 console.log("账户ok");                            
                                 state.userObj.username=payload;
                                 console.log("账户ok uerObj",state.userObj)
                             }
                        });
                    }             
                 }else{
                    //  alert("账号格式错误！")
                     console.log("账号格式错误！")
                 }
            }
            return Object.assign({},state,{
                userObj:state.userObj
            })
            break;
        // 密码
        case "REG_PSD":
            if(payload.length>0){
                console.log(payload);
                if(payload.length>=6){
                    state.userObj.password=payload;
                    console.log("密码ok",state.userObj)
                }else{
                    alert("您的密码不安全！")
                    console.log("您的密码不安全");
                    state.userObj.password="err";
                }
            }
            return Object.assign({},state,{
                userObj:state.userObj
            })
            break;
        // 确认密码
        case "CHECK_REG_PSD":
            if(payload.length>0){
                console.log(payload);
                console.log("checkpas",state.userObj)
                if(state.userObj.password!=payload){
                    alert("密码错误，请再次确认")
                    console.log("密码错误，请再次确认")
                }
            }
            return Object.assign({},state,{
                userObj:state.userObj
            })
            break;
        // 邮箱Email
        case "REG_EMAIL":
            if(payload.length>0){
                console.log(payload);
                if(/\w{3,16}@(qq|163)\.(com|cn)/.test(payload)){
                    state.userObj.email=payload;
                    console.log("邮箱ok",state.userObj)
                }else{
                    alert("邮箱格式不正确");
                    console.log("邮箱格式不正确")
                }
            }
            return Object.assign({},state,{
                userObj:state.userObj
            })
            break;
        //注册按钮，兜库，
        case "REG_BTN":
            // alert("登录成功")
            var params = new URLSearchParams();
            params.append("username",payload.username);
            params.append("password",payload.password);
            params.append("email",payload.email);
            // params.append("passWord",this.state.passWord);
            fetch("http://localhost:3000/reg",{
                method:"post",
                mode: 'cors',
                credentials: 'include',
                headers: {  
                    "Content-Type": "application/x-www-form-urlencoded"  
                },
                body:params
            }).then(
                res=>res.json()
            ).then(
                (data)=>{
                    // console.log(data) //{error:1,msg:"账号已存在"}
                    if(data.error==0){
                        // state.user=state.user.push(payload);
                        state.regSuccess = true; 
                        console.log(state.regSuccess,"state1");
                        alert("恭喜，注册成功!");
                        console.log("注册成功",data.msg);
                        console.log(state.regSuccess,"state2");
                    }else if(data.error==1){
                        console.log("1",data.msg);
                        alert("账号已存在！");
                    }else{
                        alert("您的信息不完整！");
                        console.log("2",data.msg);
                    }
                }
            );
            return Object.assign({},state,{
                // user:state.user,
                regSuccess:state.regSuccess
            })
            /* axios({
                url:"http://localhost:3000/reg",
                method:"get",
                params:payload
            }).then((res)=>{
                // console.log(res)
                if(res.data.error==0){
                    state.user.push(payload);
                    Object.assign({},state,{
                        user:state.user
                    })
                    console.log("登录成功",state.user)
                }else if(res.data.error==1){
                    console.log("1",res.data.msg)
                    alert("账号已存在！");
                }else{
                    console.log("2",res.data.msg)
                    alert("信息不完整！");
                }
            }).catch((res)=>{console.log("注册请求错误！")})

            return state; */
            break;
        case "LOGIN_NAME":
            let name=false;
            console.log("loginname",state.user)
            state.user.forEach((item,index)=>{
                if(item.username==payload){
                    name=true;
                }
            })
            if(!name){
                alert("您的账号不存在")
            }
            return state;
            break;
        //登录密码
        case "LOGIN_PSD":
            let psd = true;
            state.user.forEach((item,index)=>{
                if(payload.name){
                    if(item.username==payload.name&&item.password!=payload.psd){
                        psd=false;
                    }else if(item.username==payload.name&&item.password==payload.psd){
                        psd=true;
                    }
                }
            })
            if(!psd){
                alert("您的密码不正确！")
            }
            return state;
            break;
        //登录按钮，登录成功，种localStorage,显示用户名/购物车数量/可以添加商品至购物车
        case "LOGIN_BTN":
            let loginBtn=true;
            state.user.forEach((item,index)=>{
                if(item.username==payload.name&&item.password==payload.psd){
                    loginBtn=false;
                }
            })
            if(!loginBtn){
                state.loginSuccess=true;
                state.loginName=payload.name;
                localStorage.setItem("username",payload.name);
                // localStorage.setItem("password",payload.psd);
                alert("登录成功！");
            }else{
                alert("登录失败");
                state.loginSuccess=false;
            }
            return  Object.assign({},state,{
                loginSuccess:state.loginSuccess,
                loginName:state.loginName
            })
            break;
        
       //video播放
        case "CHANGE_PLAY":
            switch(payload){
                case "1":
                    state.play1=!state.play1;
                    state.play2=false;
                    state.play3=false;
                    break;
                case "2":
                    state.play2=!state.play2;
                    state.play1=false;
                    state.play3=false;
                break;
                case "3":
                    state.play3=!state.play3;
                    state.play1=false;
                    state.play2=false;
                break;
            }
            return Object.assign({},state,{
                play1:state.play1,
                play2:state.play2,
                play3:state.play3
            })
            break;
        default:
            return state;
            break;
    }
}

export default reducer;