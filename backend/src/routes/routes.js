const express = require('express');
const usersController = require('../controllers/users.controller');
const carsController = require('../controllers/cars.controller');

const router = express.Router();


router.get('/Users', usersController.index);
router.post('/Users', usersController.store);

router.post('/login', usersController.login);

router.get('/Cars', carsController.index);
router.post('/Cars', carsController.store);
router.put('/Cars', carsController.updateCar);
router.post('/Cars/rent/:id', carsController.rent);


module.exports = router;