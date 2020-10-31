import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

/**
 * Creando componentes de artículos
 */

class Blog extends Component {

    render() {

        /**
         * Peticion AJAX
         * get: peticion del API rest
         */
        return (
            <div id="blog">
                <Slider

                    title="Bienvenido al blog"
                    size="slider-small"

                ></Slider>
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos del API*/}
                        <Articles></Articles>
                    </div>
                    <Sidebar
                        blog="true"
                    ></Sidebar>
                </div>
            </div>
        );
    }
}

export default Blog;