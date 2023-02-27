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

/* 
    const CampoTexto = (props) => {

    O (props) aqui é uma propriedade recebida
    de <CampoTexto/>, que é declarado em outro
    script.

    Tudo que a gente passar dentro de <CampoTexto />
    vai ser recebido como uma propriedade, e dai
    podemos pegar informações dessa propriedade
    pelo (props.algumacoisa).

    O nome que vem depois do props. pode ser
    literalmente "algumacoisa", ou qualquer coisa.
    Mas deve ser o mesmo nome do atributo passado
    na tag <CampoTexto/>.

    <CampoTexto helolelo="loloca"/>
    {props.helolelo}
*/
/*
    value={props.valor}
    onChange={evento => props.aoAlterar(evento.target.value)}

    value: é o valor do input. Ele é atualizado através
    do estado da aplicação (useState), que é passado para
    essa prop.

    onChange: é uma função que é chamada toda vez que o 
    valor do input é alterado pelo usuário. A função 
    props.aoAlterar é passada para essa prop, então quando 
    o input é modificado, a função aoAlterar é chamada e 
    o novo valor é atualizado no estado da aplicação.

    Resumindo, as linhas 13 e 14 atualizam o valor do input
    e as mudanças no valor do input são transmitidas de 
    volta para a aplicação através da chamada da função 
    aoAlterar.
*/