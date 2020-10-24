'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdOrg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProdOrg.init({
    origem: DataTypes.STRING,
    pessoaId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdOrg',
  });
  return ProdOrg;
};