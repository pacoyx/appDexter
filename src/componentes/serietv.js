import  React  from "react";
import '../estilos/serietv.css';

class Serietv extends React.Component{
    
    render(){
        let pathImg="https://th.bing.com/th?id=OIF.n2K%2bENUrb%2beOtA6yX3PBbw&pid=ImgDet&rs=1";

        return (

            <div className="pt-5">
                <h2 className="text-center">Serie de TV de Showtime </h2>
                <div className="row pt-3">
                    <div className="col-12 col-sm-6 pt-3">
                        <img className="imgserietv" src={pathImg} alt="dexter 9 temporada"/>
                    </div>
                    <div className="col-12 col-sm-6 pt-3 text-justify">
                        <p className="px-3">
                        Dexter es una serie de televisión emitida originalmente 
                        por la cadena Showtime desde el 1 de octubre de 2006 hasta el 22
                        de septiembre de 2013. Es protagonizada por Michael C. Hall (como Dexter) y 
                        está ambientada en Miami. La primera temporada está basada en la novela 
                        Darkly dreaming Dexter, de Jeff Lindsay. 
                        Las temporadas posteriores evolucionaron de
                        forma independiente de las obras de Lindsay. Fue adaptada para la televisión 
                        por el guionista James Manos Jr., que escribió el primer episodio.
                        </p>

                        <p className="px-3">
                        La serie tuvo críticas muy buenas y gran popularidad. Michael C. Hall recibió varios premios y
                        nominaciones por su interpretación de Dexter, incluyendo un Globo de Oro. El 18 de noviembre 
                        de 2011, tras la sexta temporada, se había anunciado que Dexter renovaría para dos temporadas
                        más y, en abril de 2013 se decidió no renovar por una temporada más, siendo la octava 
                        la última. En 2020, Showtime anuncio que la serie se renovaria para una novena temporada,
                        la cual se estrenara en 2021.
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Serietv;