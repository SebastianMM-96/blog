import React from 'react';
import './assets/css/App.css';
/**
 * Componentes de la maquetacion 
 * para el desarrollo del proyecto
 */
import Router from './Router';

/**
 * Estado de los componentes
 * Forma de almacenar propiedades y datos que los componentes necesitan 
 * y se vean reflejados en la vista sin necesidad de recargar.
 * State - Manera de almacenar datos y propiedades de los componentes
 */

function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
