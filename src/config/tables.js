require('dotenv').config();

class Tables {
  init(connection) {
    this.connection = connection;
  }

  createAttendance() {
    const sql = process.env.CREATE_TABLE;

    this.connection.query(sql, (err) => {
      err
        ? console.error(err)
        : console.log('Tabela Atendimentos criada com sucesso!');
    });
  }
}

module.exports = new Tables();
