const express = require('express');

const CustomerServiceController = require('../controllers/customerService');

const router = express.Router();

const customerServiceController = new CustomerServiceController();

router.get('/', (req, res) => customerServiceController.get(req, res));

module.exports = router;
