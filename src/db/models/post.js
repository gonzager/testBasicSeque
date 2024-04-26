'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Autor, {
          as: 'autor',
          foreignKey: 'autor_id',
          
      })
      Post.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'post_id'
      })
    }
  }
  Post.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};