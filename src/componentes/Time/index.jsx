import Card from '../Card';
import './Time.css';

const Time = (props) => {
    const corDeFundo = {
        backgroundColor: props.colorBg
    }
    const corDestque = {
        backgroundColor: props.colorHl
    }

    return(
        <section className="time" style={corDeFundo}>
            <h3>{props.name}</h3>
            <hr style={corDestque}/>
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
}

export default Time;
