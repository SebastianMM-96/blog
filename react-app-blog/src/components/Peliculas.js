import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Sidebar from './Sidebar';

/**
 * Componentes estaticos
 * Se crean cuando es un trozo de la pantalla estatico
 */

/**
 * Metodo del ciclo de vida de un componente
 * Render - encargado de mostrar por pantalla la vista y devolver un resultado en la pagina
 * 3 estados/momentos
 * Montando
 * Mostrar - render
 * Desmonatdo
 */

/**
 * Condicionales en JSX
 * && if
 * ? if : else
 */

class Peliculas extends Component {

    /**
     * array de peliculas con state
     */

    state = {};

    cambiarTirtulo = () => {
        var { peliculas } = this.state;

        //var random = Math.floor(Math.random() *3 );

        peliculas[0].title = "Aleatorio"

        this.setState({
            pelicula: peliculas
        });
    }

    favorita = (pelicula, index) => {
        console.log('Favorito marcado');
        console.log(pelicula, index);
        this.setState({
            favorita: pelicula
        });
    }


    /**
     * Componente para empezar a montar los elementos de la vista
     * componentWillMount
    */

    componentWillMount() {
        //alert('Se empezará a montar el componente');
        this.setState({
            peliculas: [
                { title: 'Tenet', image: 'http://www.rockaxis.com/img/newsList/5249698.jpg' },
                { title: 'The Batman', image: 'https://dam.esquirelat.com/wp-content/uploads/2020/08/tr%C3%A1iler-the-batman-dc-fandome-Robert-Pattinson.jpg' },
                { title: 'The Joker', image: 'https://media.gq.com/photos/5ca4c7b28dad3c41350d3fab/16:9/w_1280,c_limit/joker-movie-trailer-gq.jpg' }
            ],
            nombre: 'Sebastian Marroquin',
            favorita: {}
        });
    }

    /**
     * Ciclo de vida de un componente
     * Montando el ciclo de vida
     * componentDidMount aparece al instante de acceder a la página o componente seleccionado
    */

    componentDidMount() {
        //alert('Se ha montado el componente');
    }

    componentWillUnmount() {
        //alert('Desmontando...');
    }

    render() {

        var favorita;

        if (this.state.favorita.title) {
            favorita = (
                <p className="favorita">
                    <strong>Mi pelicula favorita es: </strong>
                    <span>{this.state.favorita.title}</span>
                </p>
            );
        } else {
            favorita = (
                <p>
                    No hay pelicula favorita
                </p>
            )
        }

        return (
            <div id="peliculas">
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Películas</h2>
                        <p>
                            Selección de peliculas de {this.state.nombre}
                        </p>
                        <p>
                            <input type="button" value="Cambiar titulo" onClick={this.cambiarTirtulo} />
                        </p>
                        {/*Crear componente de peliculas*/}

                        {/*
                            this.state.favorita.title ? (
                                <p className="favorita">
                                    <strong>Mi pelicula favorita es: </strong>
                                    <span>{this.state.favorita.title}</span>
                                </p>
                            ) : (
                                    <p>
                                        No hay pelicula favorita
                                    </p>
                                )
                        */
                        }

                        {favorita}

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            index={i}
                                            marcaFavorita={this.favorita}
                                        ></Pelicula>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                        blog="false"
                    ></Sidebar>
                </div>
            </div>
        );
    }
}

export default Peliculas;