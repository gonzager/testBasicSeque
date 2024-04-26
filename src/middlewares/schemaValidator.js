const Joi = require('joi');
const schemaValidator = (schema) => {
    return (req, res, next) => {
    const result = schema.validate(req.body, { abortEarly: false });
    if (result.error) {
      return res.status(400).json({
        errors: result.error.details.map(error=> ({
          atributo: error.path[0], // Acceder al primer elemento de la ruta (nombre del atributo)
          error: error.message
        }))
      });
    }
    if (!req.value) {
      req.value = {};
    }
    req.body = result.value;
    next();
  };
}

module.exports = schemaValidator;
