'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING
      },

      content: {
        type: Sequelize.STRING
      },

      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // o model ta dizendo de qual tabela vem a chave id
          key: 'id'
        },

        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      created_at: {
        field: 'published',
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        field: 'updated',
        type: Sequelize.DATE,
        allowNull: false,
      }


    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('blog_posts');

  }
};
