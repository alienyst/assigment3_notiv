'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      
      queryInterface.addColumn('Jobs', 'status', { type: Sequelize.STRING }),
      queryInterface.addColumn('Companies', 'status', { type: Sequelize.STRING })
    ]);
    
    
    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  down:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Jobs', 'status', { }),
      queryInterface.removeColumn('Companies', 'status', {  })
    ]);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
