const express = require('express');

const attendanceRoute = require('./attendance');

const router = express.Router();

router.use('/atendimentos', attendanceRoute);

module.exports = router;
