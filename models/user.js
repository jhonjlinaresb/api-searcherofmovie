'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Order); 
        }
    };

    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        confirmed: DataTypes.BOOLEAN,
        token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    User.prototype.toJSON = function() { 
        const user = this.get();
        delete user.password;
        return user;
    }
    return User;
};