'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderDetail.init({
    // Model attributes are defined here
    idEnc: {
        type: DataTypes.INTEGER,
        field: 'IdEnc',
        primaryKey: true,
        allowNull: false
    },
    numLinea: {
        type: DataTypes.INTEGER,
        field: 'NumLinea',
        allowNull: false
    },
    codProPosSic: {
        type: DataTypes.STRING(50),
        field: 'CodProPosSic'
    },
    nomPro: {
        type: DataTypes.STRING(100),
        field: 'NomPro'
    },
    priceUber: {
        type: DataTypes.DECIMAL,
        field: 'PriceUber'
    },
    preVta: {
        type: DataTypes.DECIMAL,
        field: 'PreVta'
    },
    cantidad: {
        type: DataTypes.STRING(50),
        field: 'Cantidad'
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'OrderDetail',
    tableName: "UberOrdenesDet2",
    timestamps: false
  });
  return OrderDetail;
};