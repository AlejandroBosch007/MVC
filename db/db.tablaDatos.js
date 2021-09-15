//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conexion')

//tabla modelo

const Data = sequelize.define('data_usuarios', {
    listado : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    baja: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modificacion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Data;