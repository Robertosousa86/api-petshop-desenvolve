const moment = require('moment');
const connection = require('../config/connection');

class Attendance {
  insert(attendance, res) {
    const creationDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const date = moment(attendance.date, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:mm:ss'
    );

    const validDate = moment(date).isSameOrAfter(creationDate);
    const validClient = attendance.client.length >= 5;

    const validations = [
      {
        name: 'date',
        valid: validDate,
        message:
          'A data de agendamento deve ser posterior ou igual a data atual',
      },
      {
        name: 'client',
        valid: validClient,
        message: 'O nome do(a) cliente deve ter mais do que 5 caracteres',
      },
    ];

    const errors = validations.filter((element) => !element.valid);
    const containsErrors = errors.length;

    if (containsErrors) return res.status(400).json(errors);

    const datedService = { ...attendance, creationDate, date };

    const sql = 'INSERT INTO Atendimentos SET ?';

    connection.query(sql, datedService, (err, data) => {
      err ? res.status(400).json(err) : res.status(201).json(data);
    });
  }

  list(req, res) {
    const sql = 'SELECT * FROM Atendimento';

    connection.query(sql, (err, data) => {
      err ? res.status(400).json(err) : res.status(201).json(data);
    });
  }

  listById(id, res) {
    const sql = `SELECT * FROM Atendimento WHERE id=${id}`;

    connection.query(sql, (err, data) => {
      err ? res.status(400).json(err) : res.status(201).json(data);
    });
  }

  update(id, value, res) {
    const sql = 'UPDATE Atendimento SET ? WHERE id=?';

    if (value.date)
      value.date = moment(attendance.date, 'DD/MM/YYYY').format(
        'YYYY-MM-DD HH:mm:ss'
      );

    connection.query(sql, [value, id], (err, data) => {
      err ? res.status(400).json(err) : res.status(201).json(data);
    });
  }
}

module.exports = new Attendance();
