import { useState } from 'react';
import {HiOutlineViewGridAdd} from 'react-icons/hi';
import Botao from '../Botao';
import CampoLista from '../CampoLista';
import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = (props) =>{
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className="formulario">
            <form className="employees_form" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do desenvolvedor.</h2>
                <HiOutlineViewGridAdd className='adicionar_colaborador' size={32}/>
                <div>
                    <CampoTexto 
                        label="Nome" 
                        placeholder="Digite seu nome"
                        obrigatorio={true}

                        value={nome}
                        aoAlterar={valor => setNome(valor)}
                    />
                    <CampoTexto 
                        label="Função"
                        placeholder="Digite sua função"
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
                        itens={props.nomesTimes}
                        obrigatorio={true}

                        value={time}
                        aoAlterar={valor => setTime(valor)}
                    />
                    <Botao>Criar card</Botao>
                </div>
            </form>
            <form className="teams_form">
                <h2>Adicionar times:</h2>
                <HiOutlineViewGridAdd className='adicionar_time' size={32}/>
            </form>
        </section>
    );
}

export default Formulario;
