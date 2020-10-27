'use strict'

// Usa o "sequelize"
const {Model} = require('sequelize')

// Exporta o "Módulo"
module.exports = (sequelize, DataTypes) => {

  // Cria um "Model"
  class tab extends Model {
    static associate(models) {
      tab.belongsTo(
        models.Pessoas, {
        foreignKey: 'pessoaId',
        as: 'End', 
        allowNull: true
      })
    }
  }

  // Inicializa o "Model"
  tab.init(
    
    // Define os Atributos do "Model"
    {
      cep: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      pessoaId: DataTypes.INTEGER
    },

    // Nome da tabela do "Model"
    {sequelize, modelName: 'Endereco'}

  )

  // Retorna a Class "Model"
  return tab

}
