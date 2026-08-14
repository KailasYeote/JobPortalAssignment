const controller = require('../controller/applyController');
const express = require('express');
const router = express.Router();

router.post('/jobportal/apply', controller.applyJob);

module.exports = router;
