const sequelize = require('../../db/db.conexion')
//Exportamos nuestro modelo
module.exports = class Videojuegos {
    constructor (datos){
        this.datos = datos
    }
    static async listar () {
        //console.log('metodo ' + this.datos)
        //cambiaremos el valor a la tabla específica
        let resultado = await sequelize.query('SELECT * FROM tecler_s')
        //console.log(resultado[0][0][`${this.data}`])
        console.log(resultado[0][0])
        let solucion = resultado[0][0]
        return solucion
    }
    async alta (){
      //console.log('metodo ' + this.datos)
      //cambiaremos el valor a la tabla específica
      let resultado = await sequelize.query('INSERT INTO tecler_s ("vj_primero", "vj_segundo", "vj_tercero", "vj_cuarto") VALUES (?,?,?,?)', {
        replacements: [this.datos.vj_primero , this.datos.vj_segundo, this.datos.vj_tercero, this.datos.vj_cuarto], type: sequelize.QueryTypes.SELECT})
      let solucion = resultado[0][0]
      return solucion
    }
    async baja() {
      //console.log('metodo ' + this.datos)
      //cambiaremos el valor a la tabla específica
      let resultado = await sequelize.query(`DELETE * FROM tecler_s WHERE "id" = ${this.datos.id}`)
      let solucion = resultado[0][0]
      return solucion
    }
    async modificar () {
      //console.log('metodo ' + this.datos)
      //cambiaremos el valor a la tabla específica
      let resultado = await sequelize.query(`UPDATE FROM tecler_s WHERE ("id": ${this.datos.id} `)
      let solucion = resultado[0][0]
      return solucion
    }
}