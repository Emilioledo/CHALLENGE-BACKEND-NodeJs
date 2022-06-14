const { Sequelize } = require('sequelize');
const database = env.process.database;
const usernameDB = env.process.username;
const passwordDB = env.process.password;

const sequelize = new Sequelize(database, usernameDB, passwordDB, {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

module.exports = sequelize;