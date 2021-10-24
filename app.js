require('dotenv').config(); //importaciones de terceros van despues de los de primeros como fs, http, etc..
//En Uppercase por que es nuestra clase Server.
const Server = require('./models/server');
//Normalmente nos encontraríamos la aplicaciónd e servidor de Express de esta manera, pero lo hemos llevado a una clase Server en la carpeta Models
// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(process.env.PORT, () =>{
//     console.log('Servidor corriendo en el puerto:', process.env.PORT);
// });

//creamos la instancia de la clase server
const server = new Server();

//lanzar servidor para levantarlo
server.listen();