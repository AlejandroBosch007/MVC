//Importamos los modulos requeridos
var express = require('express');
var app = express();
require('dotenv').config()
const sequelize = require('./db/db.conexion');
const Data = require('./db/db.tablaDatos')
const Juegos = require('./db/db.videojuego')
const vistaDastos = require('./app/vista/vista.datos')
const vistaJuegos = require('./app/vista/vista.juegos')

//Middlewares globales
app.use(express.json())

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//iniciamos nuestro servidor
async function inicioServer() {
    try {
        await Data.sync({alter:true})
        await Juegos.sync({alter:true})
        //await Data.create({listado:'listado desde la DB dinamico', alta: 'Alta desde la DB dinamico', baja: 'Baja desde la DB dinamico', modificacion: 'Modificacion desde la DB dinamico'})
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();

//Manejo de errores
app.use((err, req, res, next) => {
  if (err) {
      console.log(err)
      if (!res.headersSent) {
        res.render('404', {result: err.message})
          res.status(500).send("Error en el servidor: " + err.message)
      }
  }
  next();
})


//Routes
vistaDastos(app)
vistaJuegos(app)
