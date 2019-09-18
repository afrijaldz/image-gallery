const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routes = require('./routes/index')
const routeNotFound = require('./middleware/RouteNotFoundMiddleWare')

app.use(routes)
app.use(routeNotFound)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})