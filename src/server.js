const app = require('./app');

try {
  app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
  });
} catch (err) {
  console.error(err);
}