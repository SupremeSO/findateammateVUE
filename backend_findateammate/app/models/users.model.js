module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            len: [5, 30]
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [8, 40]
        },
        age: {
            type: Sequelize.INTEGER,
            len: [2, 3]
        },
        email: {
            type: Sequelize.STRING
        }
    });
    return user;
}