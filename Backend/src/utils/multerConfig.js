const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.pdf')
  }
})

const fileFilter = (req, file, cb) => {
  console.log(file.mimetype)
  if (file.mimetype === 'application/pdf') {
    cb(null, true)
  } else {
    cb(new Error('El archivo no es un PDF'), false)
  }
}

const upload = multer({ storage, fileFilter })

module.exports = upload
