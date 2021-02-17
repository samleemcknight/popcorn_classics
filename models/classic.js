'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  classic.init({
    title: DataTypes.STRING,
    imdbId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'classic',
  });
  return classic;
};