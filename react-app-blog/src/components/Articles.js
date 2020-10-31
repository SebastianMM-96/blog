import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import {Link} from 'react-router-dom';

class Articles extends Component {

    /**
     * Peticion AJAX
     */

     url = Global.url;

    state = {
        articles: [],
        status: null
    };

    componentWillMount() {
        //antes de imprimir la vista carga el componente
        var home = this.props.home;
        var search = this.props.search;

        if(home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        }
    }

    getArticlesBySearch = (searched) => {
        //pasamos la url que contiene el listado de todos los 
        //articulos
        axios.get(this.url+'search/'+searched)
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            }).catch(err => {
                this.setState({
                    articles: [],
                    status: 'success'
                });
            });
    }

    getLastArticles = () => {
        //pasamos la url que contiene el listado de todos los 
        //articulos
        axios.get(this.url+'articles/last')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                //Mostrar en la vista
            });
    }

    getArticles = () => {
        //pasamos la url que contiene el listado de todos los 
        //articulos
        axios.get(this.url+'articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
                //Mostrar en la vista
            });
    }

    render() {
        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template" key={article._id}>
                        <div className="image-wrap">
                        {article.image !== null ? (
                            <img src={this.url+'get-image/'+article.image} alt={article.title} />
                        ) :
                        (
                            <img src="https://www.retirementlivingsourcebook.com/images/NoImageAvailable.png" alt="" />
                        )
                        }
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                           <Moment fromNow>
                            {article.date}
                           </Moment>
                        </span>
                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>
                        <div className="clearfix"></div>
                    </article>
                );
            });

            return (
                        <div id="articles">
                            {listArticles}
                        </div>
            );
        }else if(this.state.articles.length === 0 && this.state.status === 'success'){
            return (
                        <div id="articles">
                            <h3 className="subheader">No hay publicaciones para mostrar</h3>
                            <p>No existe contenido en esta sección :( </p>
                        </div>
            );
        }else{
            return (
                        <div id="articles">
                            <h1 className="">Cargando ...</h1>
                            <p>Espere un segundo hasta que se actualice el contenido.</p>
                        </div>
            );
        }
    }
}

export default Articles;