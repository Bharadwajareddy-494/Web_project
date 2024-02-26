var express = require('express');
var router = express.Router();

const {MongoClient}=require("mongodb")
var mongourl="mongodb://0.0.0.0:27017"
const client =new MongoClient(mongourl)


/* GET home page. */
router.post('/', function(req, res, next) {
  doConnection(req,res);
});


var doConnection=async (req,res)=>{
    newinfo=req.body
    var resdata={}
    try{
        await client.connect()
        await client.db("BharathDB").collection("userdetails").insertOne(newinfo)
        resdata.msg="valid"
        res.send(JSON.stringify(resdata))
    }
    finally{
        await client.close()
    }
}

module.exports = router;
