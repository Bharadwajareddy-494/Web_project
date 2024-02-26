var express = require('express');
var router = express.Router();

const {MongoClient}=require("mongodb")
var mongourl="mongodb://0.0.0.0:27017"
const client =new MongoClient(mongourl)

var data={
    "productdetails":[],
}

/* GET home page. */
router.post('/', function(req, res, next) {
  doConnection(req,res);
});

var doConnection=async (req,res)=>{
    try{
        await client.connect()
        var collectionresult=await client.db("BharathDB").collection("productdata").find({}).toArray()
        data.productdetails=collectionresult
        res.send(JSON.stringify(data))
    }
    finally{
        await client.close()
    }
}

module.exports = router;