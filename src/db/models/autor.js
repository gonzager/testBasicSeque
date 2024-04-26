'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Autor.hasMany(models.Post, {
      as: 'posts',
      foreignKey: 'autor_id'
     })
    }
  }
  Autor.init({
    alias: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    edadCalculada: {
      // Definimos el tipo (INTEGER) y de qué atributo/s depende (fechaNacimiento).
      type: new DataTypes.VIRTUAL(DataTypes.INTEGER, ['fechaNacimiento']),
      get: function () {
        return Math.floor(
          (new Date() - new Date(this.get('fechaNacimiento'))) /
            (1000 * 60 * 60 * 24 * 365.25)
        );
      },
    }
  }, {
    sequelize,
    modelName: 'Autor',
    timestamps: false,
  });
  return Autor;
};