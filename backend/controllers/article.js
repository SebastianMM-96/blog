/*
* Controlador del BackEnd
*/
'use strict'

var validator = require('validator');
var Article = require('../models/article');

var fs = require('fs');
var path = require('path');

const { param } = require("../routes/article");
const article = require('../models/article');
const { exists } = require('../models/article');

var controller = {
    autos: (req, res) => {
        return res.status(200).send({
            auto: 'Audi',
            modelo: 'A1',
            color: 'Negro'
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        //Recoger parametros por post
        var params = req.body;

        //Validar los datos con el validator
        try {

            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (error) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {

            //crear el objeto a guardar
            var article = new Article();
            //Asignar valores al objeto
            article.title = params.title;
            article.content = params.content;

            if(params.image){
                article.image = params.image;
            }else{
                article.image = null;
            }

            //guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no ha sido guardado'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });

            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Datos no validos'
            });
        }
    },

    getArticles: (req, res) => {

        var query = Article.find({});
        //consulta con find
        var last = req.params.last;

        if (last || last != undefined) {
            query.limit(5);
        }

        //find
        //sort articles
        query.sort('-_id').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },
    //obtener in solo articulo
    getArticle: (req, res) => {
        //obtener id de la url
        var articleId = req.params.id;
        //comprobar si existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo solicitado'
            });
        }

        //buscar articulo

        Article.findById(articleId, (err, article) => {
            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error en el servidor. No existe el articulo'
                });
            }
            //return article
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    },

    update: (req, res) => {
        //recoger el id del articulo por la url
        var articleId = req.params.id;

        //recoger los datos que llegan por put
        var params = req.body;

        //Validar los datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {
            //find and update
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }
                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Validación incorrecta'
            });
        }
    },

    delete: (req, res) => {
        //obtener el id de la URL
        var articleId = req.params.id;

        //Find and delete

        Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion de eliminar'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No ha sido posible eliminar el articulo. Verifica que exista'
                });
            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },

    upload: (req, res) => {
        //configurar el multi-party router/Article (done)

        //recoger el fichero subido
        var filename = 'Imagen no subida...';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: filename
            });
        }

        //conseguir el nombre y la extension del archivo a subir 

        var filepath = req.files.file0.path;
        var file_split = filepath.split('\\');

        //nombre del archivo
        var file_name = file_split[2];

        //Extension del archivo
        var extension_split = file_name.split('\.');
        var file_extension = extension_split[1];

        //comprobar la extencion (solo imagenes)
        //si no es valido, borrar

        if (file_extension != 'png' && file_extension != 'jpg' && file_extension != 'jpeg' && file_extension != 'gif') {
            //borrar el fichero si no cumple
            fs.unlink(filepath, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension no es valida.'
                });
            });
        } else {
            // si todo es valido
            var articleId = req.params.id;

            if (articleId) {
                // buscar articulo y actualizarlo
                Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {

                    if (err || !articleUpdated) {
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen en el articulo'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
            }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
            }
        }
    },

    //metodo para obtener una imagen del API
    getImage: (req, res) => {

        var file = req.params.image;
        var path_file = './upload/articles/' + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'Imagen no encontrada'
                });
            }
        });
    },

    //buscar articulos en el API REST
    search: (req, res) => {

        //obtener el string a buscar
        var searchString = req.params.search;

        //find or
        Article.find({
            "$or": [
                { "title": { "$regex": searchString, "$options": "i" } },
                { "content": { "$regex": searchString, "$options": "i" } },
            ]
        }).sort([['date', 'descending']]).exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion'
                });
            }
            if (!articles || articles.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existen articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        })
    }


};

module.exports = controller;