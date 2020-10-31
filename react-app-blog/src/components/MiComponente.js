import React, {Component} from 'react';

/**
 * Creacion de un componente
 */
class MiComponente extends Component{
    /**
     * Método render que hace que se actualice la vista del componente
     */
    render(){

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Piña', 'Jamon'],
            calorias: 400
        }

        return (
            //JSX
            /**
             * Se puede usar un ReactFragment
             * pero es mucho mas limpio usar el div
             */
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <p>{'Calorias: ' + receta.calorias}</p>
                <ul>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MiComponente;