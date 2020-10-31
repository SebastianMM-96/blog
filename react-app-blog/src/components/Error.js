import React from 'react';

const Error = () => {
    return(
        //JSX
        <section id="content">
            <h3 className="error404">404</h3>
            <h3>Página noencontrada</h3>
            <p>
                La página a la que intentas acceder no se encuentra disponible.
            </p>
            <p>
                Verifica que realmente la ruta existe.
            </p>
        </section>
    );
}

export default Error;