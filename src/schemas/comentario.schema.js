const Joi = require('joi');
const validateDate = require('./utils')

const comentarioSchema = Joi.object().keys({
  comentario: Joi.string().trim().min(1).max(255).required().messages({
        "string.min": `comentario debe tener al menos {#limit} caracters.`,
        "string.max": `comentario debe tener al menos {#limit} caracters.`,
        "string.empty": "comentario no puede ser vacio",
        "any.required": "comentario es requerido"
  }),
  fecha: Joi.string().custom(validateDate, 'Fecha en formato YYYY-MM-DD').required().messages({
    'any.custom': 'El formato de la fecha debe ser YYYY-MM-DD',
    'any.required': 'El campo de fecha es obligatorio'
  }),
  visible: Joi.boolean().default(true)
});

module.exports = comentarioSchema;