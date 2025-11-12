import React from 'react';
 
function GreenBackground(){
    const changeBg = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button className="green" onClick={() => changeBg("green")}>Change to Green background</button>
    </div>
  );
  }

export default GreenBackground;