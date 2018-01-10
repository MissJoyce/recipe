var express = require("express");
var router = express.Router();

var mongoCt = require("mongodb").MongoClient;
router.get("/", (req, res, next) => {
    // res.setHeader('Access-Control-Allow-Credentials', true);
    //链接库
var dbAdress = "mongodb://127.0.0.1:27017/recipe";
mongoCt.connect(dbAdress, function (err, db) {
        if(err){
            console.log("请求错误");
        }else{         
            //前axios,get请求  
            // console.log(req.query.type);
            var userList = db.collection("user");
            userList.find({username:req.query.username}).toArray((err,result)=>{
                    if(req.query.type=="join"){
                        console.log("join",req.query.buycart);
                        result[0].buycart=req.query.buycart;
                        userList.save(result[0]);
                        res.send({error:0,data:result[0].buycart});
                        db.close();
                    }else if(req.query.type=="doc"){
                        console.log("doc",result[0],req.query.buycart);
                        res.send({error:0,data:result[0].buycart});
                        db.close();
                    }
            }) 
        }
    })
});

module.exports=router;