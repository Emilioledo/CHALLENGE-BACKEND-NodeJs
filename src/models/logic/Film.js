module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: type.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        title: type.STRING, 
        releaseDate: type.STRING, 
        score: type.INTEGER, 
        characters: type.STRING, 
    });
}