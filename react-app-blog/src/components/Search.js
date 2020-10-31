import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

/**
 * Creando componentes de artículos
 */

class Search extends Component {

    render() {
        var searched = this.props.match.params.search;
        /**
         * Peticion AJAX
         * get: peticion del API rest
         */
        return (
            <div id="blog">
                <Slider

                    title={'Busqueda: ' + searched}
                    size="slider-small"

                ></Slider>
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos del API*/}
                        <Articles
                            search={searched}
                        >
                            {/*Listado de las busquedas*/}
                        </Articles>
                    </div>
                    <Sidebar
                        blog="true"
                    ></Sidebar>
                </div>
            </div>
        );
    }
}

export default Search;