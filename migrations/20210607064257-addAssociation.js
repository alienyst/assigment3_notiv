'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.changeColumn('Jobs', 'CompanyId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }),
      queryInterface.changeColumn('Jobs', 'AuthorId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      })
    ]);

    /**
     * Add altering commands here.
     *
     * Example:
     */
  },

  down:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Jobs', 'CompanyId', {
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn('Jobs', 'AuthorId', {
        type: Sequelize.INTEGER
      })
    ]);
    /**
     * Add reverting commands here.
     *
     * Example:
     */
  }
};
