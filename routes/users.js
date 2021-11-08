const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user_controller')

router.post('/create' , UserController.createUser)
router.get('/delete/:id' , UserController.deleteUser)
router.get('/updating/:id' , UserController.updateUser);
router.post('/update/:userid', UserController.update)

module.exports = router;