import React from "react";
import "./jumbotron.css"

function Jumbotron({children,score}) {
  return (<div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
    <div className="score">
    <h1>SCORE: {score}</h1>
      </div>
    </div>
  );
}

export default Jumbotron;