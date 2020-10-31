import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();
    generoHRef = React.createRef();
    generoMRef = React.createRef();
    generoORef = React.createRef();

    /**
     * 
     * @param {state} 
     */

     state = {
         //objeto vacio para rellenarlo
         user: {}
     }

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if(this.generoHRef.current.checked){
            genero = this.generoHRef.current.value;
        }else if(this.generoMRef.current.checked){
            genero = this.generoMRef.current.value;
        }else{
            genero = this.generoORef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidoRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        });

        console.log('Formulario enviado');
        console.log(user);
    }

    render() {

        if(this.state.user.nombre){
            var user = this.state.user;
        }

        return (

            <div id="formulario">
                <div className="center">
                    <div id="content">
                        {/*Creacion de un formulario*/}
                        <h1 class="subheader">Formulario</h1>

                        {/*Mostrar datos del formulario*/}
                        {this.state.user.nombre &&
                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Biografía: <strong>{user.bio}</strong></p>
                                <p>Género: <strong>{user.genero}</strong></p>
                            </div>
                        }

                        {/*OnChange - Muestra los datos del formulario de una manera reactiva
                        desde la pantalla donde tenemos anidado el div que muestra los datos */}

                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" name="apellido" ref={this.apellidoRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografía</label>
                                <textarea name="bio" id="" cols="30" rows="10" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radioButtons">
                                <input type="radio" name="genero" id="" value="hombre" ref={this.generoHRef}/>Hombre
                                 <input type="radio" name="genero" id="" value="mujer" ref={this.generoMRef}/>Mujer
                                <input type="radio" name="genero" id="" value="otro" ref={this.generoORef}/>Otro
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Enviar" className="btn btn-success"/>
                        </form>
                    </div>
                        <Sidebar
                            blog="false"
                        ></Sidebar>
                    </div>
                </div>
        );
    }
}

export default Formulario;