var express = require('express');
var router = express.Router();
// var { checkLogin } = require('../routes/authentication'); related to block login

/* GET home page. */
router.get(['/', '/index'], /*checkLogin,*/ function(req, res, next)  {
  res.render('index');
});
/* GET film page. */
router.get('/film', function(req, res, next) {
  res.render('film');
});
/* GET search. */
router.get('/search', function(req, res, next) {
  res.render('search');
});
/* GET upgrade-plan page. */
router.get('/upgrade-plan', function(req, res, next) {
  res.render('upgrade-plan');
});

module.exports = router;
