'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
          
        }
    }
    Movie.init({
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        poster_path: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
       {
        sequelize,
        modelName: 'Movie',
      });
return Movie;
};