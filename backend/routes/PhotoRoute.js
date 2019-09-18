const router = require('express').Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const originalnameSplit = file.originalname.split('.')
    const fileExtension = originalnameSplit[originalnameSplit.length-1]
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtension)
  },
})

const upload = multer({ storage })

const PhotoController = require('../controllers/PhotoController')

router.get('/', PhotoController.all)
router.post('/', upload.single('avatar'), PhotoController.upload)

module.exports = router
