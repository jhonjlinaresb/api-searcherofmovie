'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
          //this.belongsToMany(models.Order, {through: models.OrderMovie});
        }
    }
    Movie.init({
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        poster_path: {
          type: DataTypes.STRING,
          allowNull: true
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        createdAt: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: true
        },
        updatedAt: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: true
        }
      },
       {
        sequelize,
        modelName: 'Movie',
      });
      Movie.prototype.toJSON = function() { 
        const movie = this.get();
        return movie;
    }
return Movie;
};