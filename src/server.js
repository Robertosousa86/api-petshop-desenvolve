const setupApp = require('./app');
require('dotenv').config();

const PORT = process.env.PORT;

try {
  const app = setupApp();

  app.listen(PORT, () => {
    console.log(`🏁 Servidor rodando na porta http://localhost:${PORT}`);
  });
} catch (err) {
  console.error(err);
}
