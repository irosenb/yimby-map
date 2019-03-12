var express = require('express'); 
var router = express.Router(); 
var Organization = require('../models/organization');

router.get('/organizations', function(req, res, next) {
  Organization.all(function(results) {
    console.log(results)
    res.render('organizations/index', {items: results});
  });
}); 

router.get('/organizations/new', function(req, res, next) {
  res.render('organizations/new', {});
});

router.post('/organizations', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email; 
  var location = req.body.location; 
  var url = req.body.url; 
  var twitter = req.body.twitter;

  Organization.create(name, email, location, url, twitter, function(result, error) {
    if (error) {
      console.error(error);
      res.send(500);
    } else {
      res.send(200);
    }
  }); 


})

module.exports = router;
