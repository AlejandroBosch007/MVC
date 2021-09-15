const VideoJuegos = require('../modelo/modelo.juegos')

module.exports.listarJuegos = async ()=> {
    try {
        let resultado = await VideoJuegos.listar()
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('algo raro paso por aca')
    }
}

module.exports.altaJuegos = async (data)=> {
    try {
        let nuevoJuego = new VideoJuegos(data)
        let resultado = await nuevoJuego.alta()
        console.log(resultado)
        return 'Alta correcta'
    }catch (err){
        console.log(err)
        throw new Error ('Algo raro paso al dar de alta los juegos.')
    }
}

module.exports.modificacionJuegos = async (data)=>{
    try {
        let modificaJuego = new VideoJuegos(data)
        let resultado = await modificaJuego.modificar()
        return resultado
    }catch (err) {
        console.log(err)
        throw new Error ('Algo raro paso al intentar modificar los datos')
    }
}
