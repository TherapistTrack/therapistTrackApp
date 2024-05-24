const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/register', userController.registerUser)
router.delete('/delete', userController.deleteUser)
router.put('/update', userController.updateUser)
router.get('/list', userController.listUser)

module.exports = router
