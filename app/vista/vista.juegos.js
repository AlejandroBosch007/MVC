const controladorJuegos = require('../controlador/controlador.juegos')

module.exports = async (app)=>{
    app.get('/', async(req,res)=> {
        try {
            res.render('index')
        }catch (err){
            console.log(err)
            res.status(400).json('Algo raro paso')
        }
    })

    app.get('/listar', async (req,res)=>{
        let resultado = await controladorJuegos.listarJuegos()
        res.render('index')
    })

    app.post('/alta', async (req,res)=> {
        let data = req.body
        // nj_primero - nj_segundo - nj_tercero - nj_cuarto
        
    })
}