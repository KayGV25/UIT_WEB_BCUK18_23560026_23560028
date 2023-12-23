var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index'], function(req, res, next)  {
  if(req.session.loggedIn) res.render('index')
  res.redirect('/login');
});
/* GET film page. */
router.get('/film', function(req, res, next) {
  if(req.session.loggedIn) res.render('film')
  res.redirect('/login');
});
/* GET search. */
router.get('/search', function(req, res, next) {
  if(req.session.loggedIn) res.render('search')
  res.redirect('/login');
});
/* GET upgrade-plan page. */
router.get('/upgrade-plan', function(req, res, next) {
  if(req.session.loggedIn) res.render('upgrade-plan')
  res.redirect('/login');
});

module.exports = router;
