import React from 'react';

import '../App.css';
import Carrusel from '../componentes/carrosel';
import Libros from '../componentes/libros';
import Serietv from '../componentes/serietv';
import Autor from '../componentes/autor';
import Contacto from '../componentes/contacto';

function Home(){
    return (
      <div className="container">        
        <Carrusel />      
        <Serietv />
        <Libros />
        <Autor />
        <Contacto /> 
      </div>
    );
}

export default Home;