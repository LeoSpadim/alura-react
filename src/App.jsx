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

    function deletarColaborador(props){
        setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== props));
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario 
                nomesTimes={times.map(time => time.nome)} 
                aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
            />
            {times.map(time => 
                <Time 
                    key={time.nome} 
                    name={time.nome}
                    colorBg={time.corFundos} 
                    colorHl={time.corDestaques}

                    employee={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                    aoDeletar={deletarColaborador}
                />
            )}
        </div>
    );
}

export default App;
