var express = require('express');
var router = express.Router();


const {MongoClient}=require("mongodb")
var mongourl="mongodb://0.0.0.0:27017"
const client =new MongoClient(mongourl)


/* GET home page. */
router.post('/', function(req, res, next) {
    doConnection(req,res)
});

var doConnection=async (req,res)=>{
    var resdata={};
    try{
        await client.connect()
        var collectionresult=await client.db("BharathDB").collection("userdetails").find({accountid:req.body.accountid,accountpassword:req.body.accountpassword}).toArray()
        if(collectionresult[0].isAdmin==true){
            resdata.isAdmin=true
        }
        else{
            resdata.isAdmin=false
        }
        if(collectionresult.length==1){
            resdata.msg="valid"
        }
        else{
            resdata.msg="invalid"
        }
        res.send(JSON.stringify(resdata))
    }
    finally{
        await client.close()
    }
}

module.exports = router;
