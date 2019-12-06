var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/apiController.js');

router.get('/', api_controller.index);

module.exports = router;