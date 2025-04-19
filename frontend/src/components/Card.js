import React from "react";
import './Card.css'


function Card({ name, image }) {
  return (
  
    <div>
      <div style={{justifyContent:"center"}}>
        <img style={{ height: "10vw", width: "10vw" }} src={image} alt="na" />
      </div>
      
      <h3>{name}</h3>
    
    </div>
  );
}

export default Card;
