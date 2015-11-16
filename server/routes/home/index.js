/***************************************************

CREATED_BY: Yash Saxena

ANGULAR APP: Home

***************************************************/

var express = require('express'),
    router  = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Home'
  });
});

module.exports = router;
