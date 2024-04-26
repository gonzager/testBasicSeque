const NotFound = require('../errors/server.error')
const existById = (Model) => {
  return  async (req, _ , next) => {
    const id = req.params.id  ?? req.body.autor.id;
    const instance = await Model.findOne({where: {id}})
    
    if(!instance) { 
      const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
      throw new NotFound(
        {message:`No existe un ${modelName} con el id ${id}.`,
        statusCode:404, 
        atributo: 'id'
      })
    }
    next()
  }
}
module.exports = existById