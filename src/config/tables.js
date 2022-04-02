require('dotenv').config();

class Tables {
  init(connection) {
    this.connection = connection;
  }

  createAttendance() {
    const sql = process.env.CREATE_TABLE;

    this.connection.query(sql, (error) => {
      error
        ? console.error(error)
        : console.log('Tabela Atendimentos criada com sucesso!');
    });
  }
}

module.exports = new Tables();
