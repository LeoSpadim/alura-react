import Card from '../Card';
import './Time.css';

const Time = (props) => {
    return(
        props.employee.length > 0 ? 
            <section className='time' style={{backgroundColor: props.colorBg}}>
                <h3>{props.name}</h3>
                <hr style={{backgroundColor: props.colorHl}}/>
                <div className='colaboradores'>{
                    props.employee.map(colaborador => <Card 
                        key={colaborador.nome}
                        color={props.colorHl}
                        
                        imagem={colaborador.imagem} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}

                        aoDeletar={props.aoDeletar}
                    />
                )}</div>
            </section>
        : ''
    );
}

export default Time;

/* Outra forma de fazer a verificação:
    
    if(!props.employee.length){
        return '';
    }
    return(
        <section className="time" style={{backgroundColor: props.colorBg}}>
            <h3>{props.name}</h3>
            <hr style={{backgroundColor: props.colorHl}}/>
            <div className='colaboradores'>
                {props.employee.map(colaborador => 
                    <Card 
                        key={colaborador.nome}
                        
                        imagem={colaborador.imagem} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo}
                    />
                )}
            </div>
        </section>
    );
*/
