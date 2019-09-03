'use strict'

// Se requiere el módulo de mongoose
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
// Se hará una promesa
mongoose.Promise = global.Promise;

// El método connect (Que recibe la cadena de conexión) se encargará de establecerla
mongoose.connect('mongodb+srv://chuy99:chuy99@cluster0-quhju.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    // El método then recibe función de callback
    .then(() => {
        console.log("Conexion a la base de datos establecida satisfactoriamente...");

        // Creación del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la url localhost:3700")
        });

    })
    // catch en caso de tener un error
    .catch(err => console.log(err));