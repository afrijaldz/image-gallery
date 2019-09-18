const express = require('express')
const router = express.Router()

const UserRoutes = require('./UserRoutes')
const PhotoRoutes = require('./PhotoRoutes')
const AuthRoutes = require('./AuthRoutes')

router.use('/users', UserRoutes)
router.use('/photos', PhotoRoutes)
router.use('/auth', AuthRoutes)

module.exports = router