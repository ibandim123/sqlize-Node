'use strict';

// { INTEGER } = require("sequelize");
//const sequelize = require("sequelize");

module.exports = {
  up:  (queryInterface, Sequelize) => {   
     return queryInterface.createTable('users', { //Tabela Users com seus campos. 
       id: {//Configurações do campo de dados.
         type: Sequelize.INTEGER,
         primary: true,
         autoIncrement:true,
         allowNull:false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
     
  }
};
