var express = require("express");
var router = express.Router();

var mongoCt = require("mongodb").MongoClient;
router.post("/", (req, res, next) => {
    // res.setHeader('Access-Control-Allow-Credentials', true);
    //链接库
    var dbAdress = "mongodb://127.0.0.1:27017/recipe";
    mongoCt.connect(dbAdress, function (err, db) {
        if(err){
            console.log("注册请求错误");
        }else{         
            // 前端fetch,post请求
            console.log(req.body);
            if(req.body.username == undefined||req.body.password==undefined||req.body.email==undefined){
                res.send({error:2,msg:"您的信息不完整"});
                db.close();
            }else{
                var userList = db.collection("user");
                userList.find({username:req.body.username}).toArray((err,result)=>{
                    if(result.length){
                        console.log("账号已存在");
                        res.send({error:1,msg:"账号已存在"});
                        db.close();
                    }else{
                        console.log("注册成功")
                        req.session.username=req.body.username;
                        req.session.password=req.body.password;
                        req.body.buycart=[];
                        // req.body.id=Number(userList.length)+1;
                        userList.save(req.body);
                        res.send({error:0,msg:"注册成功"});
                        db.close()
                    }
                })
            }
            
           /*
            //前台axios,get请求  
           console.log(req.query);
           if(req.query.username==undefined||req.query.password==undefined||req.query.email==undefined){
                res.send({error:2,msg:"您的信息不完整"});
                db.close();
           }
            var userList = db.collection("user");
            userList.find({username:req.query.username}).toArray((err,result)=>{
                if(result.length){
                    console.log("账号已存在");
                    res.send({error:1,msg:"账号已存在"});
                    db.close();
                }else{
                    console.log("注册成功")
                    req.session.username=req.query.username;
                    req.session.password=req.query.password;
                    userList.save(req.query);
                    res.send({error:0,msg:"注册成功"});
                    db.close()
                }
            }) */
            
           
        }
    })
});

module.exports=router;