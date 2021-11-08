const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/home_controller')

router.get('/',HomeController.home)
router.get('/main',HomeController.main)
router.use('/users', require('./users'));

module.exports = router;