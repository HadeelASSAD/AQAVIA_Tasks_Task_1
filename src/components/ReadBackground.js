import React from 'react';


function RedBackground (){
    const changeBg = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button className='red' onClick={() => changeBg("red") }>Change to Red background</button>
     
    </div>
  );
  }

  export default RedBackground;