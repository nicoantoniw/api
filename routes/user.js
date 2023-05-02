const express = require('express');

const userController = require('../controllers/user');
const auth = require('../middleware/is-auth');

const router = express.Router();

// router.get('/certificate', userController.getCertificate);

module.exports = router;