const express = require('express');

const AttendanceController = require('../controllers/attendanceController');

const router = express.Router();

const attendanceController = new AttendanceController();

router.get('/', (req, res) => attendanceController.getAttendance(req, res));

module.exports = router;
