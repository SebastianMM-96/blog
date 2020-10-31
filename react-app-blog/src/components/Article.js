import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import { Redirect, Link } from 'react-router-dom';
import swal from 'sweetalert';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            }).catch(err => {
                this.setState({
                    articles: false,
                    status: 'success'
                });
            });
    }

    deleteArticle = (id) => {

        swal({
            title: "Seguro de eliminarlo?",
            text: "Una vez eliminado, este no será posible recuperarlo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                articles: res.data.article,
                                status: 'deleted'
                            });

                            swal(
                                'Articulo eliminado',
                                'El articulo ha sido eliminado correctamente',
                                'success'
                            );
                        });
                } else {
                    swal(
                        "No te preocupes!", 
                        'Nada ha sido eliminado'
                    );
                }
            });
    }

    render() {
        if (this.state.status === 'deleted') {
            return <Redirect to="/blog"></Redirect>;
        }
        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">
                    {article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {article.image !== null ? (
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                ) :
                                    (
                                        <img src="https://www.retirementlivingsourcebook.com/images/NoImageAvailable.png" alt="" />
                                    )
                                }
                            </div>
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            } className="btn btn-danger">Eliminar</button>

                            <Link to={"/blog/editar/" + article._id} className="btn btn-warning">Editar</Link>

                            <div class="clearfix"></div>
                        </article>
                    }
                    {!article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El artículo no existe</h2>
                            <p>
                                Intentalo más tarde.
                            </p>
                        </div>
                    }
                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>
                                Espera un momento.
                            </p>
                        </div>
                    }
                </section>
                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default Article;