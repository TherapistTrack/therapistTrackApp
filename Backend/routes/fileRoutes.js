const express = require('express')
const router = express.Router()
const fileController = require('../controllers/fileController')
const upload = require('../utils/multerConfig')

router.post('/upload', upload.single('pdf'), fileController.uploadFile)
router.get('/pdf/:filename', fileController.getFile)

module.exports = router
