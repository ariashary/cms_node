var express = require('express');
var router = express.Router();

var application_controller = require('../controllers/applicationController.js');

router.get('/', application_controller.index);
router.get('/create', application_controller.create);

module.exports = router;
