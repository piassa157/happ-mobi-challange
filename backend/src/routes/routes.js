const express = require('express');
const usersController = require('../controllers/users.controller');


const router = express.Router();


router.get('/Users', usersController.index);
router.post('/Users', usersController.store);


module.exports = router;