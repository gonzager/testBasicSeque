const { Router } = require('express')
const { postController, comentarioController } = require('../controllers')
const { Autor, Post } = require('../db/models')
const validator = require('../middlewares/schemaValidator')
const existAutor = require('../middlewares/existsById')(Autor)
const existPost = require('../middlewares/existsById')(Post)
const {postSchema, comentarioSchema} = require('../schemas')
const route = Router()

route.get('/post', postController.getPost)
route.get('/post/:id', existPost, postController.getPostBy )
route.post('/post', validator(postSchema), existAutor, postController.createPost)
route.post('/post/:id/comentario',existPost, validator(comentarioSchema), comentarioController.createComentario )

module.exports = route