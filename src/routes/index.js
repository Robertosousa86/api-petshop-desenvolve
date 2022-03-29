const express = require('express');

const customerServiceRoute = require('./customerService');

const router = express.Router();

router.use('/atendimentos', customerServiceRoute);

module.exports = router;
