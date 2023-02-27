import './Botao.css'

const Botao = (props) =>{
    return(
        <button 
            type="submit" 
            className="botao"
            required={props.obrigatorio}
        >{props.children}</button>
    );
}

export default Botao;

/*
    <button className='botao'>{props.children}</button>

    Aqui usamos props.children que vai pegar
    tudo que estiver dentro do <Botao> <Botao/>
    la onde ele é chamado. (Note que agora 
    precisamos abrir e fechar a "tag").

    Fazemos isso pois o botão pode ser uma
    imagem, um ícone ou qualquer outra coisa,
    não somente um texto.
*/
