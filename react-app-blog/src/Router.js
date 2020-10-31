import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

/**
 * Componentes que se desean importar
 */
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
/**
 * Configuracion de rutas
 * Todas las rutas que se deben de configurar, deberán de ir dentro de la etiqueta Switch
 * Para la ruta de home es necesario hacer uso de la directiva Exact - para dirigir a la ruta 
 * exacta que se esta indicando dentro del switch/route
 * Parametros obligatorios en una ruta deben de seguir la estructura de Angular, es decir, /ruta/:<parametro>
 * parametro opcional ?
 */

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/blog/articulo/:id" component={Article}></Route>
                    <Route exact path="/blog/crear" component={CreateArticle}></Route>
                    <Route exact path="/blog/editar/:id" component={EditArticle}></Route>
                    <Route exact path="/blog/busqueda/:search" component={Search}></Route>
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            var search = props.match.params.search;
                            return (
                                <Redirect
                                    to={'/blog/busqueda/' + search}
                                >
                                </Redirect>
                            );
                        }
                    }></Route>
                    <Route exact path="/formulario" component={Formulario}></Route>
                    <Route exact path="/peliculas" component={Peliculas}></Route>

                    <Route exact path="/pagina-1" render={() => (
                        <h1>Hola mundo desde la ruta sin componente</h1>
                    )}></Route>

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h2 className="subheader">Página de Pruebas</h2>
                                <h3>
                                    {nombre && !apellidos &&
                                        <span>{nombre}</span>
                                    }
                                    {nombre && apellidos &&
                                        <span>{nombre} {apellidos}</span>
                                    }
                                </h3>
                            </div>
                        );
                    }
                    }></Route>

                    <Route component={Error}></Route>
                </Switch>
                <div className="clearfix"></div>
                <Footer></Footer>
            </BrowserRouter >
        );
    }
}

export default Router;