var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/okr18";

router.all('/*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.header();
    next();
});

MongoClient.connect(url, function(err,db){

  router.get('/index', function (req, res) {
        db.collection('logs').find({}).toArray(function(err, docs){
          res.send(docs);
        });
  });
});

router.get('/', function (req, res) {
    res.send('express started');
});

module.exports = router;
