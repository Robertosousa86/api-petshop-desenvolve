const moment = require('moment');
const connection = require('../config/connection');

class Attendance {
  insert(attendance) {
    const creationDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const date = moment(attendance.date, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:mm:ss'
    );
    const datedService = { ...attendance, creationDate, date };

    const sql = 'INSERT INTO Atendimentos SET ?';

    connection.query(sql, datedService, (error, results) => {
      error ? console.error(error) : console.log(results);
    });
  }
}

module.exports = new Attendance();
