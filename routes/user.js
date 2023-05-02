const express = require('express');

const certificateController = require('../controllers/user');
const auth = require('../middleware/is-auth');

const router = express.Router();

// router.get('/certificate', auth.isCyclist, certificateController.getCertificate);

module.exports = router;