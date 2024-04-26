const { Router } = require('express')
const autorRoute = require('./autor.route')
const postRoute = require('./post.route')

const routes = Router()
routes.use(autorRoute)
routes.use(postRoute)

module.exports = routes