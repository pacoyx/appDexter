import { React } from "react";


function Tarjeta(props){
    return ( 
    <div className="card">
    <img className="card-img-top" src={props.url} alt={props.titulo}/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <span className="badge badge-primary">New</span>
      <p className="card-text">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
      dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
      Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
      sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
      </p>
    </div>
  </div>    

    );
}


export default Tarjeta;


