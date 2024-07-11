const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_example', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
