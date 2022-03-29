class CustomerServiceController {
  get(req, res) {
    try {
      return res.send('Você está na rota atendimentos utilizado o método GET');
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CustomerServiceController;
