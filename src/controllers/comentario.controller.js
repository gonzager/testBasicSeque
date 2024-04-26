const {Comentario} = require('../db/models')
const controller = {}
const createComentario = async ( req, res ) => {
  const post_id = req.params.id;
  const comentario = req.body;
  const newComentario = await Comentario.create({
    post_id, ...comentario
  })
  res.status(201).json(newComentario)
}
controller.createComentario = createComentario

module.exports = controller