const express = require('express');

const userController = require('../controllers/user');
const auth = require('../middleware/is-auth');

const router = express.Router();

router.get('/get', userController.getUserByParameter);

module.exports = router;