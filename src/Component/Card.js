import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
background-color: #D3D3D3;
font-size: 1.5rem;
line-height: 1.5;
font-family: monospace;
color: 
`;

const TextStyle = styled.p`
color: #483D8B;
font-weight: 800;
font-size: 2rem;
`;
const ImgStyle = styled.img`
border: 1px solid white;
border-radius: 10px;
box-shadow: 1px 5px 12px 1px rgba(255,255,255, 0.2);
`;

const Card = props => {

    return(
        <CardStyle>
            <h2>{props.title}</h2>
            <TextStyle>Description: {props.explanation}</TextStyle>
            <ImgStyle className='img' alt='' src={props.hdurl} />
            <p>Date: {props.date}</p>
            <p>By: {props.copyright}</p>

        </CardStyle>
    )
}
export default Card;