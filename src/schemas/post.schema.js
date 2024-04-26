const Joi = require('joi');
const validateDate = require('./utils')

const autor = Joi.object().keys({
  id: Joi.number().min(0).required().messages({
    'any.required': 'El campo de id de autor es obligatorio'
  })
});

const postSchema = Joi.object().keys({
  nombre: Joi.string().trim().min(1).max(255).required().messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener al menos {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"
  }),
  fecha: Joi.string().custom(validateDate, 'Fecha en formato YYYY-MM-DD').required().messages({
    'any.custom': 'El formato de la fecha debe ser YYYY-MM-DD',
    'any.required': 'El campo de fecha es obligatorio'
  }),
  autor: autor.required().messages({
    'any.required': 'El campo de autor es obligatorio',
  })
});

module.exports = postSchema;