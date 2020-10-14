'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {

        }
    };

    Order.init({
    estado: {
      type: DataTypes.ENUM('alquilada', 'enviado', 'entregado')
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};