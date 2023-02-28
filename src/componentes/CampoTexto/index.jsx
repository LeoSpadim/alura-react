import './CampoTexto.css'

const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                type="text"

                placeholder={props.placeholder} 
                required={props.obrigatorio}

                value={props.valor}
                onChange={evento => props.aoAlterar(evento.target.value)}
            />
        </div>
    );
}

export default CampoTexto;
