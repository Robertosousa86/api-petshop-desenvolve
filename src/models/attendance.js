const moment = require('moment');
const connection = require('../config/connection');

class Attendance {
  insert(attendance, res) {
    const creationDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const date = moment(attendance.date, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:mm:ss'
    );
    const datedService = { ...attendance, creationDate, date };

    const sql = 'INSERT INTO Atendimentos SET ?';

    connection.query(sql, datedService, (err, data) => {
      err ? res.status(400).json(err) : res.status(201).json(data);
    });
  }
}

module.exports = new Attendance();
