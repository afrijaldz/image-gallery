const router = require('express').Router()

const AuthController = require('../controllers/AuthController')

router.use('/login', AuthController.login)
router.use('/register', AuthController.register)

module.exports = router