'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentario.belongsTo(models.Post, {
        foreignKey: 'post_id'
      })
    }
  }
  Comentario.init({
    comentario: DataTypes.STRING,
    visible: DataTypes.BOOLEAN,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};