const { Router } = require('express');
const { autorController, postController } = require('../controllers')
const { Autor } = require('../db/models')
const validator = require('../middlewares/schemaValidator')
const existAutor = require('../middlewares/existsById')(Autor)
const addAutorToPostBody = require('../middlewares/addAutorToPostBody')
const {autorSchema, postSchema} = require('../schemas')
const route = Router();

route.get('/autor', autorController.getAutores)
route.get('/autor/:id', existAutor, autorController.getAutorById)
route.post('/autor', validator(autorSchema), autorController.createAutor)
route.post('/autor/:id/post',existAutor, addAutorToPostBody, validator(postSchema),postController.createPost )

module.exports = route