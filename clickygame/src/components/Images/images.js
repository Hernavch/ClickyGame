import React from 'react';
import './images.css';


// import Characters from 'characters';

function ImageCard(props){
    
    return(<div className="card col-2 " id="imageCard" onClick={props.totalClick}>
              <img className="card-img-top" alt={props.name} src={props.image}/>
              <h5 className="card-title">{props.name}</h5>

       
           </div>
      
    )
}

export default ImageCard;