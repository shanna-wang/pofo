var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
  console.log("ROUTED TO index from design");
});

router.get('/comet-design-system', function(req, res, next) {
  res.render('works/comet-design-system');
  console.log("ROUTED TO comet");
});

module.exports = router;
