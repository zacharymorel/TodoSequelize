'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addColumn('ToDos', 'completedAt', Sequelize.DATE)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.removeColumn('ToDos', 'completedAt')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
