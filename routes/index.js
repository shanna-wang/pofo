var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
  res.render('index');
  console.log("ROUTED TO index");
});



// router.get('/works/:workItem', function(req, res, next) {
//   var link = './includes/works/' + req.params["workItem"];
//   res.render('work', { page: link});
// });



// router.get('/challenge', function(req, res, next) {
//   res.render('challenge', { title: 'UI Challenge' });
// });

// router.get('/trello', function(req, res, next) {
//   res.render('trello', { title: 'Trello Playbook' });
// });


// router.get('/old-pofo', function(req, res, next) {
//   res.render('old-pofo', { title: 'Portfolio 2016' });
// });

module.exports = router;
