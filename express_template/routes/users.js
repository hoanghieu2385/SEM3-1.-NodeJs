var express = require('express');
var userController = require('../controller/userController.js');
var router = express.Router();

/* GET users listing. */
router.route('/')
      .get(userController.getUsers)
      .post(userController.createUser)

module.exports = router;
