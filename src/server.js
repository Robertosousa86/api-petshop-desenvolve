const setupApp = require('./app');
require('dotenv').config();

const connectionConfig = require('./config/connection');

connectionConfig.connect((err) => {
  if (err) return console.error(err);
});

const PORT = process.env.PORT;

const app = setupApp();

app.listen(PORT, () => {
  console.log(`🏁 Servidor rodando na porta http://localhost:${PORT}`);
});
