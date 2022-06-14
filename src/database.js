const { Sequelize } = require('sequelize');
const dbConfig = require('./config/dbConfig');
const UserModel = require('./models/user/User');


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log("synchronized tables");
    })


module.exports = {
    User
};