import React from "react";
import img404 from "../imagenes/404Error.png";

function NotFound(){
    return (
        <div>
            <img src={img404} alt="404" />
            <a href="https://storyset.com/web">Illustration by Freepik Storyset</a>
        </div>
    );
}

export default NotFound;