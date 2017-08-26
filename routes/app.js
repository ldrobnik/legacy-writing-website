var express = require('express');
var router = express.Router();
var Group = require('../models/group');

/* GET home page. */
router.get('/', function(req, res, next) {
  Group.findOne({}, function(err, doc) {
    if (err) {
      return res.send('Error!');
    }
      res.render('index', { name: doc}); // renders the view (index page)
  });
});

module.exports = router;
