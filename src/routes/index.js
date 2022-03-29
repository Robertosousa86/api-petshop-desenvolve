const express = require('express');

const router = express.Router();

router.get('/atendimentos', (req, res) => {
  res.status(200).send('Rota de atendimentos realizando GET');
});

module.exports = router;
