const { Autor } = require('../db/models')
const controller = {}
const getAutores = async (_, res)=>{
  res.status(200).json(await Autor.findAll({attributes: ['id', 'alias', 'nacionalidad', 'fechaNacimiento', 'edadCalculada']}));
}
controller.getAutores = getAutores

const getAutorById = async (req, res)=>{
  const id = req.params.id;
  res.status(200).json(
    await Autor.findOne({attributes: ['id', 'alias', 'nacionalidad', 'fechaNacimiento', 'edadCalculada'], where: {id}, include: ['posts']})
  )
}
controller.getAutorById = getAutorById

const createAutor = async (req, res) => {
  res.status(201).json(await Autor.create(req.body))
}
controller.createAutor = createAutor


module.exports = controller