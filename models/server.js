const express = require('express')
const cors = require('cors');
const { route } = require('../routes/usuarios');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        // Middlewares

        this.middlewares();

        // Rutas de mi aplicacion

        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json())
        
        // Directorio publico
        this.app.use( express.static('public'))

        
    }

    routes() {
        // Middleware dee las rutas desde routes/user.js 
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }

}


module.exports = Server