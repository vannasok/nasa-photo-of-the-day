import React from 'react';

const Card = props => {

    return(
        <div className='card'>
            <h2>{props.title}</h2>
            <p>Description: {props.explanation}</p>
            <img className='img' alt='' src={props.hdurl} />
            <p>Date: {props.date}</p>
            <p>By: {props.copyright}</p>

        </div>
    )
}
export default Card;