var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

router.get('/', function (req, res) {
    res.send('express started');
});


module.exports = router;