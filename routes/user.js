const express = require('express');

const userController = require('../controllers/user');
const auth = require('../middleware/is-auth');

const router = express.Router();

// auth.isUser is the middleware used for authorization
router.get('/get', auth.isUser, userController.getUserByParameter);

module.exports = router;