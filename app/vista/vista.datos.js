const controladorDatos = require('../controlador/controlador.datos')

module.exports = async (app)=> {
    
    app.get('/datos/:metodo' , async (req,res)=>{
        let data = req.params.metodo
        try{
            let resultado = await controladorDatos.listarDatos(data)
            res.render('listar', {result:resultado})
        }catch (err){
            console.log(err)
            res.estatus(400).json('Error en la consulta')
        }
    })
}
