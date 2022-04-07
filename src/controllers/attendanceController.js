const Attendance = require('../models/attendance');

class AttendanceController {
  getAttendance(req, res) {
    try {
      Attendance.list(res);

      return res.send('Você está na rota atendimentos utilizado o método GET');
    } catch (err) {
      console.error(err);
    }
  }

  postAttendance(req, res) {
    try {
      const attendance = req.body;

      Attendance.insert(attendance);

      return res.send('Post atendimento');
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = AttendanceController;
