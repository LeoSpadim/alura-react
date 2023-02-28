import './Botao.css'

const Botao = (props) =>{
    return(
        <button 
            type="submit" 
            className="botao"
            required={props.obrigatorio}
        >
            {props.children}
        </button>
    );
}

export default Botao;

