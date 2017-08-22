// SCHEMA GOES HERE
// 'use strict'

module.exports = function(sequelize, DataTypes) {
  let ToDo = sequelize.define('ToDo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  return ToDo
}
