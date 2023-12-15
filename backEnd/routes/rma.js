const express = require('express')
const router = express.Router()
const rmaController = require('../controller/rmaController')

router.post('/createRMA', rmaController.create)
router.get('/getRMA/:id', rmaController.getRMA)

module.exports = router