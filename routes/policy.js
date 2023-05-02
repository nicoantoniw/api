const express = require('express');

const policyController = require('../controllers/policy');
const auth = require('../middleware/is-auth');

const router = express.Router();

router.get('/user', policyController.getUserFromPolicy);
router.get('/policies', policyController.getPoliciesFromUser);

module.exports = router;