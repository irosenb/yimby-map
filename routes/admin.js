var express = require('express'); 
var router = express.Router(); 
var Organization = require('../models/organization')

router.get('/admin/organizations', function(req, res, next) {
  res.render('organizations/index', {})
}) 

router.get('/admin/organizations/new', function(req, res, next) {
  res.render('organizations/new', {})
})

router.post('/admin/organizations', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email; 
  var location = req.body.location; 
  var url = req.body.url; 
  var twitter = req.body.twitter;

  Organization.create(name, email, location, url, twitter); 

  
})

module.exports = router;
