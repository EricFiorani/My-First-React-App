import React from 'react'
import './card.css'

const Card = props => {
    return (
        <div className='Card'>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Card