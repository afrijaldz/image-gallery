const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const originalnameSplit = file.originalname.split('.')
    const fileExtension = originalnameSplit[originalnameSplit.length - 1]
    cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtension)
  },
})

const upload = multer({
  storage,
  limits: {
    fileSize: 2048 * 1024,
  },
  fileFilter: function (req, file, cb) {
    const allowedType = ['image/jpeg', 'image/png', 'application/pdf']
    if (allowedType.some(type => type === file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('file type not allowed.'))
    }
  },
})

module.exports = upload.any()