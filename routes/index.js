var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shanna Wang' });
});

router.get('/challenge', function(req, res, next) {
  res.render('challenge', { title: 'UI Challenge' });
});



module.exports = router;
