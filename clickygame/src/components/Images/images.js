import React from 'react';
import './images.css';

// import Characters from 'characters';

function ImageCard(props){
    console.log(props);
    return(
        <>
        <div className="card">
        <img alt={props.name} src={props.image}/>
        <h3>Name:</h3>{props.name}
        <p>Occupation</p> {props.occupation}

            </div>
        </>
    )
}

export default ImageCard;