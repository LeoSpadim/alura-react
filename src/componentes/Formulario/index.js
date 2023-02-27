import { useState } from 'react';
import Botao from '../Botao';
import CampoLista from '../CampoLista';
import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = (props) =>{
    const times = [
        'Programação I',
        'Programação II',
        'Arte',
        'Animação',
        'VFX e Shaders',
        'Roteiro',
        'Gameplay e Level Design',
        'Som e Música'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('https://imgur.com/a/UUW1wZg');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do desenvolvedor</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    obrigatorio={true}

                    value={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}

                    value={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"

                    value={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <CampoLista 
                    label="Time"
                    itens={times}
                    obrigatorio={true}

                    value={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    );
}

export default Formulario;

/*
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('https://imgur.com/a/UUW1wZg');
    const [time, setTime] = useState('');

    Hook useState para declarar quatro estados do 
    componente: nome, cargo, imagem e time.

    A sintaxe de useState é 
    (estadoInicial) => [estado, atualizador], 
    onde estadoInicial é o valor inicial do estado 
    e atualizador é a função que atualiza o valor 
    do estado.
    
    value={...}
    aoAlterar={valor => set...(valor)}

    As funções aoAlterar passadas para os componentes 
    filho CampoTexto e CampoLista usam essas funções 
    atualizadoras para atualizar os estados quando o 
    valor do campo de texto ou lista é alterado.

    As funções aoAlterar passadas para os componentes 
    filho CampoTexto e CampoLista usam essas funções 
    atualizadoras para atualizar os estados quando o 
    valor do campo de texto ou lista é alterado.
*/
