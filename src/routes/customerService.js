const express = require('express');

const CustomerServiceController = require('../controllers/customerService');

const router = express.Router();

const customerServiceController = new CustomerServiceController();

router.get('/', (req, res) =>
  customerServiceController.getAttendance(req, res)
);

module.exports = router;
