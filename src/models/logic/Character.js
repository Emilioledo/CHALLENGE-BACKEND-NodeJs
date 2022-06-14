module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        id: {
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        name: type.STRING, 
        age: type.INTEGER, 
        weight: type.INTEGER, 
        story: type.STRING, 
    });
}