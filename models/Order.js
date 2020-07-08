'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        field: 'Id',
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE,
        field: 'Fecha',
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    nomCliente: {
        type: DataTypes.STRING(200),
        field: 'NomCliente'
    },
    subTotalUber: {
        type: DataTypes.DECIMAL,
        field: 'SubTotalUber'
    },
    numOrdenUber: {
        type: DataTypes.STRING(50),
        field: 'NumOrdenUber'
    },
    codRestaurante: {
        type: DataTypes.STRING(50),
        field: 'CodRestaurante'
    },
    orderId: {
        type: DataTypes.STRING(50),
        field: 'OrderId'
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Order',
    tableName: "UberOrdenesEnc",
    timestamps: false
  });
  return Order;
};