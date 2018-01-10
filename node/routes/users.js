var express = require('express');
var router = express.Router();

/* GET users listing. */
var mongoCt = require("mongodb").MongoClient;
router.get("/", (req, res, next) => {
    // res.setHeader('Access-Control-Allow-Credentials', true);
    //链接库
    var dbAdress = "mongodb://127.0.0.1:27017/recipe";
    mongoCt.connect(dbAdress, function (err, db) {
        if(err){
            console.log("注册请求错误");
        }else{         
            //前台axios,get请求  
            var userList = db.collection("user");
            userList.find().toArray((err,result)=>{
              res.send(result);
              db.close();
            })
        }
    })
});

module.exports = router;
