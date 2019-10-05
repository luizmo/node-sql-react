const Sequelize = require('sequelize');
const conection = new Sequelize('concessionaria','root',null,{
  host:'localhost',
  dialect:'mysql',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
});

module.exports = conection;