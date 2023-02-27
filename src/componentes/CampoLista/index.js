import './CampoLista.css'

const CampoLista = (props) => {
    return (
        <div className="lsita-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento => props.aoAlterar(evento.target.value)}>
                {props.itens.map(item => 
                    <option key={item} required={props.obrigatorio}>{item}</option>
                )}
            </select>
        </div>
    );
}

export default CampoLista;

/*
    {props.itens.map(item => <option></option>)}

    Aqui estamos pegando a propriedade itens,
    então mapeamos ela - percorre esse array
    e devolve um novo array. Então, pra cada 
    item desse novo array, ele deve retornar 
    uma <option> - isso é feito por uma arrow
    function (de nome item) que só faz return
    da <option>, por isso essa sintaxe enxuta.

    Por fim, passamos o valor desse item para
    ser o nome que vai aparecer na <option>.
*/
/*
    <select value={props.valor} onChange={evento => props.aoAlterar(evento.target.value)}>

    Cria um elemento <select> com o valor selecionado
    definido pela prop valor e uma função callback para
    lidar com mudanças na seleção definida pela prop
    aoAlterar.
*/
