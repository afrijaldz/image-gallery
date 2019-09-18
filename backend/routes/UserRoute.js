const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.all)

module.exports = router
