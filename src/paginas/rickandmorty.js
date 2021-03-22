import React, { useState, useEffect } from "react";
import Tarjeta from "../componentes/tarjeta";


  function RickandMorty(){
     const [ datarm, setDatarm ] = useState({loading:true, data:[], pagina:1});
 
     useEffect(() => {
        const fetchData = async () => {     
        const response =  await fetch(`https://rickandmortyapi.com/api/character/?page=${datarm.pagina}`);
        const datax = await response.json();
           
        setDatarm({
                loading: false,
                data: datax.results,
                pagina: datarm.pagina + 1 
            });
        };
           
        fetchData();
      }, []);
       
     function handleCargar(){
          console.log('click');     
               
      }

      return (
          <>
            {datarm.data.map(item => (       
              <Tarjeta key={item.id} url={item.image} titulo={item.name}/>       
              ))}
            <button className="btn btn-info btn-block" onClick={()=>handleCargar()} >cargar mas</button>
        </>
      );
}

export default RickandMorty;
