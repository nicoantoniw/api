const express = require('express');

const databaseController = require('../controllers/database');

const router = express.Router();

router.get('/users', databaseController.addUsers);
router.get('/policies', databaseController.addPolicies);

module.exports = router;