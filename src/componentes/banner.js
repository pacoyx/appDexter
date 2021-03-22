import React from 'react';

import bannerDex from '../imagenes/bannerDexter.jpg';
import '../estilos/banner.css';

function Banner(){
    return (
            <div className="mt-2">
                <img src={bannerDex} alt="banner"/>            
                <hr></hr>  
            </div>        
    );
}

export default Banner;
