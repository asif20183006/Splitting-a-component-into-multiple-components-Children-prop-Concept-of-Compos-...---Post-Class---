import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //alert('Left Key pressed!')
            setBallPosition({right:"10px"})
            break;
        case 38:
          //alert('Up Key pressed!')
          setBallPosition({bottom:"10px"})
            break;
        case 39:
          //alert('Rigth Key pressed!')
          setBallPosition({left:"10px"})
            break;
        case 40:
          // alert('Down Key pressed!');
          setBallPosition({up:"10px"})
            break;
    }
};
  const reset = () => {
    setRenderBall(false)
  };
  function renderChoice(event){
    alert(event.keyCode)

  }
  const abc = () => {
    document.addEventListener("keypress",renderChoice(),false)

  };
  const startGame=()=>{
    setRenderBall(true);
  }

  return (
    <div className="playground">
      {renderBall?null:<button className="start" onClick={startGame}>Start</button>}
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderBall?<p className="ball" style={ballPosition} ></p>:null}
      
      
    </div>
  );
};

export default App;
