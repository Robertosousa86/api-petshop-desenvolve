class Tables {
  init(connection) {
    this.connection = connection;
  }

  createAttendance() {
    const sql =
      'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))';

    this.connection.query(sql, (error) => {
      error
        ? console.error(error)
        : console.log('Tabela Atendimentos criada com sucesso!');
    });
  }
}

module.exports = new Tables();
