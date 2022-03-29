const setupApp = require('./app');

try {
  const app = setupApp();

  app.listen(3000, () => {
    console.log(`🏁 Servidor rodando na porta http://localhost:3000`);
  });
} catch (err) {
  console.error(err);
}
