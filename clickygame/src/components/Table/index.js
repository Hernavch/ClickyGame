import React from "react";


function Table(props) {
  return <div className="container-fluid">
  <div className="row">
  {props.children}
  </div>

  
  </div>;
}

export default Table;
