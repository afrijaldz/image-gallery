const express = require('express')
const router = express.Router()

const UserRoutes = require('./UserRoute')
const PhotoRoutes = require('./PhotoRoute')

router.use('/users', UserRoutes)
router.use('/photos', PhotoRoutes)

module.exports = router