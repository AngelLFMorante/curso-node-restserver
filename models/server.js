const express = require('express');
const cors = require('cors');

//con esta clase ya tenemos todo para abstraer nuestro server a otras aplicaciones si quisieramos
class Server{

    //creamos un constructor
    constructor(){
         this.app = express();
         this.port = process.env.PORT;
         this.usuariosPath = '/api/usuarios'; //esto es opcional pero viene bien, para un golpe de vista, ahí sabe que tenemos los usuarios.

        //aquí iria Middlewares -> son funciones que van añadirle otra funcionalidad a nuestra webserver, siempre va a ejecutarse cuando levantemos nuestro servidor.
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        //Cors, -> que son los cors ? -> Cross-Origin Resource Sharing, se aplica para prevenir que el dominio A evite acceder a recursos del dominio B usando solicitudes del tipo AJAX como cuando usamos fetch() o XMLHttpRequest.
        this.app.use( cors() );

        //Lectura y parseo del body -> para recibir datos del body
        this.app.use( express.json() );

        //Directorio Público
        this.app.use( express.static('public') );//la palbra clave use es lo que nos dice que es un middleware
    
    }

    //creamos las rutas que queremos tener en nuestra aplicación
    routes(){
        
        //Es como un middleware adicional por que le decimos que todo lo que pase por aquí hacemos la llamada
        //ese es el path que vamos a enviar-> /api/usuarios -> en teoría en user.js no nos hace falta poner nada solo con / nos vale.
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    //indicamos por que puerto esta escuchando nuestro servidor
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }

}

module.exports = Server;