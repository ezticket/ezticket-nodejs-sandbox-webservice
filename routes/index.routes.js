var express = require('express');
var router = express.Router();

/* GET first route */
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello world' });
});

module.exports = router;
