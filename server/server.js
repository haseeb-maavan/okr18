var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'html');

app.use('/', router);
var port = 10000;

app.listen(port, function () {
    console.log('running at localhost: ' + port);
});
module.exports = app;
