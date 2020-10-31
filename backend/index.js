'use strict'
//Carga del componente mongoose
var mongoose = require('mongoose');
//Importando el app
var app = require('./app');
//Definiendo el puerto
var port = 3900;

mongoose.set('useFindAndModify', false)
mongoose.Promise = global.Promise;
//Conexion
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true}).then(() => {
    console.log('U are connected');
    /**
     * Crear el servidor y escuchar peticiones del tipo http
    */
    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:'+port);
    })
});
