import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
    const [colaboradores, setColaboradores] = useState([]);

    return (
        <div className="App">
            <Banner/>
            <Formulario aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>
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
