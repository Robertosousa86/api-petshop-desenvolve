const connection = require('../config/connection');

class Attendance {
  insert(attendance) {
    const sql = 'INSERT INTO Atendimentos SET ?';

    connection.query(sql, attendance, (error, results) => {
      error ? console.error(error) : console.log(results);
    });
  }
}

module.exports = new Attendance();
