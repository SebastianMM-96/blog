import React, { Component } from 'react';
/**
 * Importando los componentes creados
 */
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    /**
     * State - Ejemplo
     */

    contador = 0;

    //state
    /*
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador: 0
    };

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola soy {nombre}</h2>
                <p>Tengo {edad} años</p>
            </div>
        );

        return presentacion;
    }

    /**
     * Metodos alternativos
     * hacer funciones de tipo callback
     * para no pasar el bind
    */
    sumar= (e) => {
        //this.contador = this.contador + 1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        //this.contador = this.contador - 1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    /**
     * Props
     * Componente = objeto 
     * Propiedades o argumentos desde la instancia
     */

    render() {
        var nombre = 'Sebastian Marroquin';
        var edad = 24;

        return (
            //JSX
            <section id="content">
                <h2 className="subheader">Ultimas publicaciones</h2>
                <p> Bienvenido al contenido </p>

                <h2 className="subheader">Funciones en JSX</h2>
                {this.HolaMundo(nombre, edad)}

                <br />

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente></MiComponente>
                </section>

                <h2 className="subheader">States</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick= {this.sumar}/>
                    <input type="button" value="Restar" onClick= {this.restar}/>
                </p>

            </section>
        );
    }
}

export default SeccionPruebas;