var express = require('express');
var router = express.Router();

var application_controller = require('../controllers/applicationController.js');

/* GET home page. */
router.get('/', application_controller.index);

router.get('/create', application_controller.create);
router.post('/user-create', application_controller.user_create);

module.exports = router;
