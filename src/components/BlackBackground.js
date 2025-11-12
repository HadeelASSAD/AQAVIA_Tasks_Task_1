import React from "react";


  function BlackBackground(){
    const changeBg = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button className="black" onClick={() => changeBg("black")}>Change to Black background</button>
    
    </div>
  );
  }


export default BlackBackground;