import React from 'react';
import './card.style.css';

export const Card= (props)=>{
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} alt='Dp' />
            <h2 >{props.monster.name}</h2>
            <p><a href={`mailto:${props.monster.email}`} >{props.monster.email}</a></p>
            <p><a href={`http://${props.monster.website}`} rel="noopener noreferrer" target="_blank" >{props.monster.website}</a></p>
            <p>{props.monster.phone}</p>
        </div>

    )

}