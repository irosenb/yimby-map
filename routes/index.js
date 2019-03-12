var express = require('express');
var router = express.Router();
var Organization = require('../models/organization');

/* GET home page. */
router.get('/', function(req, res, next) {
  Organization.all(function(results) {
    console.log(results)
    res.render('organizations/index', {items: results});
  });
});

module.exports = router;
