const Datos = require('../modelo/modelo.datos')

//Exportamos nuestros Modulos

module.exports.listarDatos = async (data)=> {
    try {
    let rst = new Datos (data)
    let resultado = await rst.listar()
    return resultado
    }catch (err) {
        console.log('Error desde el modelo' + err)
        throw new Error ({error: err.message})
    }
}