var express = require('express');
var router = express.Router();
var sumController = require("../controllers/sum-controller")

/* GET home page. */
router.get('/', function (req, res, next) {
  let sum = sumController.sum(2, 5);
  res.render('index', { title: 'Hello Codezilla Pvt Ltd', 'sum': sum });
});

module.exports = router;
