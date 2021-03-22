import React , { useState }from "react";




// function handleChange(e){
//     console.log('evento::',e.target.name);
//     console.log('evento::',e.target.value);
//     this.setState({[e.target.name]: e.target.value })
// }

const Contacto = () => {

    const [state, setState] = useState({txtnombre:  '', txtcorreo:  '', txtmensaje: '',cmbfruta:''});

    const handleChange = (e)=>{
        // console.log('evento::',e.target.name);
        // console.log('evento::',e.target.value);
        setState({...state, [e.target.name]: e.target.value })
    }

    const handleClick = ()=>{
        console.log('formulario state::', state);
    }
    
    return (
        <div>
            <div>
                <h2>Formulario de Contacto</h2>
                <hr></hr>
                <form>
                    <div className="form-group">
                        <label>
                            Nombre
                        </label>
                    <input className="form-control"  name="txtnombre" onChange={handleChange} value={state.txtnombre}/>
                    </div>

                    <div className="form-group">
                        <label>
                            Correo
                        </label>
                    <input className="form-control"  name="txtcorreo" onChange={handleChange} value={state.txtcorreo}/>
                    </div>

                    <div className="form-group">
                        <label>
                            Mensaje
                        </label>
                        <textarea className="form-control"  name="txtmensaje" onChange={handleChange} value={state.txtmensaje} />   
                    </div>
                    <div className="form-group">
                    <label>
                        Pick your favorite flavor:
                        <select value={state.value} onChange={handleChange} className="form-control" name="cmbfruta">
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    </div>

                    <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Contacto;