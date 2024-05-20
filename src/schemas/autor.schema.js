const Joi = require('joi');
const validateDate = require('./utils')

const autorSchema = Joi.object().keys({
  alias: Joi.string().trim().min(3).max(20).required().messages({
        "string.min": `alias debe tener al menos {#limit} caracters.`,
        "string.max": `alias debe tener como máximo {#limit} caracters.`,
        "string.empty": "alias no puede ser vacio",
        "any.required": "alias es requerido"
  }),
  nacionalidad: Joi.string().optional(),
  fechaNacimiento: Joi.string().custom(validateDate, 'Fecha en formato YYYY-MM-DD').required().messages({
    'any.custom': 'El formato de la fecha debe ser YYYY-MM-DD',
    'any.required': 'El campo de fecha es obligatorio'
  }),
});

module.exports = autorSchema;