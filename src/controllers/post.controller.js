const { Post } = require('../db/models')
const controller = {}
const getPost = async (_, res)=>{
  res.status(200).json(await Post.findAll({include:['autor']}));
}
controller.getPost = getPost


const getPostBy = async(req, res) => {
  const id = req.params.id;
  res.status(200).json(await Post.findOne({where: {id}, include:['autor','comentarios']} ))
}
controller.getPostBy = getPostBy


const createPost = async (req, res) => {
  const post = await Post.create( {
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    autor_id: req.body.autor.id
  })
  res.status(201).json(post)
  
}
controller.createPost = createPost

module.exports = controller