const express = require('express')
const rmaRoutes = require('./rma')
const router = express.Router()

router.use(rmaRoutes)

module.exports = router