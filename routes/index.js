var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin/organizations', function(req, res, next) {
  res.render('organizations/index', {})
}) 

router.get('/admin/organizations/new', function(req, res, next) {
  res.render('organizations/new', {})
})

module.exports = router;
