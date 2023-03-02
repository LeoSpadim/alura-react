import './Card.css'
import {AiFillMinusCircle} from 'react-icons/ai'
import React, { useState } from 'react';

const Card = (props) => {
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const handleMouseEnter = () => {
      setShowDeleteIcon(true);
    }
    const handleMouseLeave = () => {
      setShowDeleteIcon(false);
    }

    return(
        <div className='colaborador' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='cabecalho' style={{backgroundColor: props.color}}>
                {showDeleteIcon && (
                    <AiFillMinusCircle 
                        size={32} 
                        className='deletar' 
                        onClick={() => props.aoDeletar(props.nome)}
                    />
                )}
                <img src={props.imagem} alt="" />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

export default Card
