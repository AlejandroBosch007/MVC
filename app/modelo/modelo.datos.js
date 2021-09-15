const sequelize = require('../../db/db.conexion')
//const Data = require('')

//Exportamos nuestro modelo

module.exports = class Datos {
    constructor (datos){
        this.datos = datos
    }

    async listar () {
        console.log('metodo ' + this.datos)
        let resultado = await sequelize.query('SELECT * FROM data_usuarios')
        //console.log(resultado[0][0][`${this.data}`])
        let solucion = resultado[0][0][this.datos]
        return solucion
    }

    async alta (){

    }

    async baja() {

    }

    async modificar () {
        
    }
}