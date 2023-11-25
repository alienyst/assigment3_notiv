const express = require('express');
const router = express.Router();
const ControllerCustomer = require('../controllers/customerController');


const errorHandler = require('../middlewares/errorHandler');

router.post('/register', ControllerCustomer.register)

router.post('/login', ControllerCustomer.login)


router.use(errorHandler);




module.exports = router;

