// SCHEMA GOES HERE

const Todo = (sequelize, DataTypes) =>
  sequelize.define('ToDo', {
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

module.exports = ToDo
