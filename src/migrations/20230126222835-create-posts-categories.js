'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('posts_categories', { 
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts', // o model ta dizendo de qual tabela vem a chave id
          key: 'id'
        },

        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories', // o model ta dizendo de qual tabela vem a chave id
          key: 'id'
        },

        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },


     });
    
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.dropTable('posts_categories');
     
  }
};
