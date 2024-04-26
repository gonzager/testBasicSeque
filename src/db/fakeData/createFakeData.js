const express = require('express');
const db = require('../models')

module.exports = async () => {
  const autor = await db.Autor.create({
    alias: 'Gerardo',
    nacionalidad: 'ARG',
    fechaNacimiento: new Date('1975-08-12')
  });

  const post = await db.Post.create({
    nombre: 'Relaciones entre tablas',
    fecha: new Date(),
    autor_id: autor.id,
    comentarios: [
      {
        comentario:'comentario 1',
        visible: true,
        fecha: new Date(),
      },
      {
        comentario:'comentario 2',
        visible: false,
        fecha: new Date(),
      }
    ]
  }, {include: ['comentarios']})
  console.log('Fake Data Creada.... ')
  //console.log( (await db.Post.findAll({include:['autor','comentarios']})).map(record => record.toJSON()) )

}

