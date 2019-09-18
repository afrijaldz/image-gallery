function all(req, res) {
  res.send('okee')
}

function upload(req, res, next) {
  const photo = req.file

  res.send(photo)
}

module.exports = {
  all,
  upload,
}