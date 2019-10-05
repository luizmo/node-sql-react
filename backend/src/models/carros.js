const Sequelize = require('sequelize');
const conection = require('../config/database');

const Carro = conection.define('carros',{
  veiculo: {
    type:Sequelize.STRING,
    allowNull:false
  },
  marca: {
    type:Sequelize.STRING,
    allowNull:false
  },
  ano: {
    type:Sequelize.INTEGER,
    allowNull:false
  },
  descricao: {
    type:Sequelize.TEXT,
    allowNull:false
  },
  vendido: {
    type:Sequelize.BOOLEAN,
    allowNull:false
  }
});

module.exports = Carro;