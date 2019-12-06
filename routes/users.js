var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController.js');

/* GET users listing. */
router.get('/', user_controller.index);

router.get('/:id', user_controller.byId);

module.exports = router;
