import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
    const times = [
        {
            nome: 'Programação',
            corFundos: '#D9F7E9',
            corDestaques: '#57C278'
        },
        {
            nome: 'Arte',
            corFundos: '#E8F8FF',
            corDestaques: '#82CFFA'
        },
        {
            nome: 'Roteiro',
            corFundos: '#F0F8E2',
            corDestaques: '#A6D157'
        },
        {
            nome: 'Design',
            corFundos: '#FDE7E8',
            corDestaques: '#E06B69'
        },
        {
            nome: 'Som e Música',
            corFundos: '#FAE9F5',
            corDestaques: '#DB6EBF'
        }
    ]

    const [colaboradores, setColaboradores] = useState([]);

    return (
        <div className="App">
            <Banner/>
            <Formulario nomesTimes={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>
            {times.map(time => 
                <Time key={time.nome} name={time.nome} colorBg={time.corFundos} colorHl={time.corDestaques}></Time>
            )}
        </div>
    );
}

export default App;

/*
    const [colaboradores, setColaboradores] = useState([]);

    O useState no setter vai concatenar tudo que já tinha
    no array e colocar o novo que está sendo passado.

    <Formulario aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>

    Está sendo definido o componente Formulario e passado 
    para ele uma propriedade aoCadastrar. Essa propriedade 
    é uma função que será executada pelo componente 
    Formulario quando um novo colaborador for cadastrado.

    A função aoCadastrar recebe como parâmetro um objeto 
    colaborador que contém os dados do novo colaborador 
    cadastrado. Quando essa função é executada pelo componente 
    Formulario, ela atualiza o estado da lista de colaboradores 
    com o novo colaborador cadastrado usando a função setColaboradores.

    Essa função recebe como parâmetro um novo array contendo 
    todos os colaboradores já cadastrados ([...colaboradores]) 
    e o novo colaborador cadastrado (colaborador). Dessa forma, 
    o novo colaborador é adicionado ao final do array de colaboradores, 
    mantendo a lista atualizada com todos os colaboradores cadastrados 
    até o momento.
*/
