module.exports =  (req, res, next) => {
  res.status(404).send({ error: 'Route not found' })
}