const Attendance = require('../models/attendance');

class CustomerServiceController {
  getAttendance(req, res) {
    try {
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

module.exports = CustomerServiceController;
