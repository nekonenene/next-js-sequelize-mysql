'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('article', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('article');
  }
};
