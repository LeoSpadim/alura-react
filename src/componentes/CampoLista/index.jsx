import './CampoLista.css'

const CampoLista = (props) => {
    return (
        <div className="lsita-suspensa">
            <label>{props.label}</label>
            <select value={props.value} onChange={evento => props.aoAlterar(evento.target.value)}>
                <option value=""></option>
                {props.itens.map(item => 
                    <option key={item} required={props.obrigatorio}>{item}</option>
                )}
            </select>
        </div>
    );
}

export default CampoLista;
