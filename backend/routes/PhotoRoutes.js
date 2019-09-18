const router = require('express').Router()

const UploadMiddleware = require('../middleware/UploadMiddleware')

const PhotoController = require('../controllers/PhotoController')

router.get('/', PhotoController.all)
router.post('/', UploadMiddleware, PhotoController.upload)

module.exports = router
