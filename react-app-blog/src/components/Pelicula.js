import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcaFavorita(this.props.pelicula,this.props.index);
    }

    render() {
        const { title, image } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <span className="date">
                    Hace 10 minutos
                </span>
                <Link to="/blog">Leer más...</Link>

                <button onClick={this.marcar}>
                    Favorita
                </button>

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;