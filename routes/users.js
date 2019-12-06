var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController.js');

router.get('/', user_controller.index);
router.get('/:id', user_controller.detail);
router.get('/delete/:id', user_controller.delete);
router.post('/user-create', user_controller.user_create);

module.exports = router;
