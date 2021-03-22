import React from "react";
import '../estilos/autor.css';

class Autor extends React.Component{

    handlerClick(){
        console.log('haciendo click');
    }

    render(){
        return (
            <div className="py-5">
                <div>
                    <h4>Acerca del Autor</h4>
                    <hr></hr>
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <img className="imgautor" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Jeff_lindsay_2013.jpg" alt="autor"/>
                        </div>
                        <div className="col-sm-6 col-12">
                            <h3>Jeff Lindsay</h3>
                            <hr></hr>
                            <p className="text-justify px-3">
                            Jeffrey P. Freundlich (14 de julio de 1952), más conocido como Jeff Lindsay, es un dramaturgo y novelista estadounidense.
                            </p>
                            <h4>Biografía</h4>
                            <hr></hr>
                            <p className="text-justify px-3">
                            Graduado en el Middlebury College de (Vermont) en 1975,1​ Lindsay está casado con la sobrina de Ernest Hemingway, la también escritora Hilary Hemingway, con quien vive en Cabo Coral, (Florida). Con ella ha coescrito muchas de sus obras, al igual que con Michael Dorn, con quien escribió Time blender.
                            </p>
                            <p className="text-justify px-3">
                            A pesar de ello, es mundialmente conocido por ser el creador de Dexter, el asesino en serie protagonista de El oscuro pasajero (2004), Querido Dexter (2006), Dexter en la oscuridad, Dexter por decisión propia, Dexter el asesino exquisito, Dexter por dos y Dexter, cámara, ¡acción!.
                            </p>
                            <p className="text-justify px-3">
                            El primer libro fue incluido en la lista de nominación original para el Mystery Writers of America como Mejor novela inicial, pero fue eliminado al descubrirse que, durante los 90, escribió varias novelas bajo el seudónimo de Jeffrey P. Lindsay. A pesar de ello, el éxito del personaje fue tal que Showtime le dio una oportunidad televisiva: Dexter, protagonizada por Michael C. Hall y cosechando un éxito rotundo.
                            </p>
                        </div>

                    </div>
                    <button onClick={this.handlerClick} className="btn btn-info btn-block">Mas info...</button>
                </div>
            </div>
        );
    }
}

export default Autor;