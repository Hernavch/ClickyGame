import React from "react";


function Header({ children, score}) {
  return ( <div className="score">
      {score}
      </div>
    
  );
}

export default Header;