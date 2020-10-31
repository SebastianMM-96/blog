'use strict'

/**
 * Cargar modulos de Node para crear el servidor
*/
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app= express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');

//Cargar middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS Peticiones del frontend
//acceso cruzado entre los dominios
//permitir peticiones http o ajax desde el front end
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Añadir prefijos de rutas
//Cargar rutas
app.use('/api', article_routes);

//Exportar modulo (fichero actual)
module.exports = app;