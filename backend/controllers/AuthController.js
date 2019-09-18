function login(req, res, next) {
  res.send('login')
}

function register(req, res, next) {
  res.send('register')
}

module.exports = {
  login,
  register,
}