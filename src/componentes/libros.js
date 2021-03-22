import React from 'react';
import Tarjeta from "./tarjeta";

function Libros(){
    
  const data = [
    {
      url:'https://lelibros.online/uploads/2016/07/descargar-libro-dexter-el-asesino-exquisito-dexter-en-pdf-epub-mobi-o-leer-online.jpg',
      titulo:'El Asesino Exquisito',
      id:101
    },
    {
      url:'https://th.bing.com/th/id/OIP.oWs9NlJbAHKqPpwjJhbaYgAAAA?pid=ImgDet&rs=1',
      titulo:'Dexter por 2',
      id:102
    },
    {
      url:'https://www.librosdemario.com/covers/52/57/cover.jpg',
      titulo:'Dexter en la Oscuridad',
      id:103
    },
    {
      url:'https://th.bing.com/th/id/OIP.YkIjYJFt5yCqYc8xmdWTMQAAAA?pid=ImgDet&rs=1',
      titulo:'Dexter, Camara y Accion',
      id:104
    },
    {
      url:'https://th.bing.com/th/id/R07d85aecccbd29c775ef569645bedf8f?rik=hTl5zd3Gfg2vmQ&riu=http%3a%2f%2fwww.lanormal.com.ar%2fmedia%2flibros%2fd53daf548613f7b52d1099d4a2f1d9ee.jpg&ehk=TCqKO9eQeo0Y9BbNYxplZCyrfOuDee%2b5u99t8nKvDj4%3d&risl=&pid=ImgRaw',
      titulo:'Rumbo al Sur',
      id:105
    },
    {
      url:'https://somoslibros.net/wp-content/uploads/2014/10/dexter-por-desicion-propia.jpg',
      titulo:'Dexter por Decision Propia',
      id:106
    }
  ]
  
  return (
      <div>
        <div className="text-center pt-5">
          <h1 className="py-3">Libros de la Colección</h1>
          <p className="text-justify px-3">
            Muchas veces encontramos películas, programas televisivos y series que están basadas en libros. En esta ocasión, os traemos un ejemplo más de esta situación. Nos referimos a los libros sobre el personaje Dexter Morgan, libros que inspiraron la serie homónima, la cual nos adentra a distintos episodios intrigantes en la que Dexter se postula como un justiciero.
          </p>
        </div>
    
        <div className="card-columns pt-5">
          {
            data.map((item)=>{
              return <Tarjeta key={item.id} titulo={item.titulo} url={item.url} />
            })
          }
        </div>
      </div>
    );
}

export default Libros;