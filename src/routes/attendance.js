const express = require('express');

const AttendanceController = require('../controllers/attendanceController');

const router = express.Router();

const attendanceController = new AttendanceController();

router.get('/', (req, res) => attendanceController.getAttendance(req, res));
router.get('/', (req, res) => attendanceController.getAttendanceById(req, res));
router.post('/', (req, res) => attendanceController.postAttendance(req, res));

module.exports = router;
