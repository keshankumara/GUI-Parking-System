
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/parking', controller.parking);
router.post('/login', controller.login);
router.post('/booking', controller.bookParking);
router.post('/booking_update', controller.updateParking);
router.post('/booking_delete', controller.deleteParking);
router.post('/register', controller.register);


module.exports = router;