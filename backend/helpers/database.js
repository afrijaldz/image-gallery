require('dotenv').config()

const nano = require('nano')(`http://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:5984`)

module.exports = nano