const express = require('express');

const policyController = require('../controllers/policy');
const auth = require('../middleware/is-auth');

const router = express.Router();

// auth.isAdmin is the middleware used for authorization
router.get('/user', auth.isAdmin, policyController.getUserFromPolicy);
router.get('/policies', auth.isAdmin, policyController.getPoliciesFromUser);

module.exports = router;