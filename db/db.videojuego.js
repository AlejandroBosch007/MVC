//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conexion')

//Exporto el modelo

const Juegos = sequelize.define('tecler_s', {
    nj_primero: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nj_segundo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nj_tercero: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nj_cuatrto: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

module.exports = Juegos