import React from "react";


function Table(props) {
  return <div className="container-fluid table">
    
  <div className="row" id="cardHolder">
     
    {props.children}
  </div>

  
  </div>;
}

export default Table;
