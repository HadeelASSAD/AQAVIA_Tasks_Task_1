import React, { useState } from 'react';

function ImageUpload(){
    const [image,setImage]=useState(null);

    function handleImageChange(e){
      const file =e.target.files[0];
      if (file) {
      setImage(URL.createObjectURL(file));
    }
  }
  return(
    <div style={{marginTop:'50px'}}>  
      <label htmlFor="file-upload-image" className=' image'>
        Choose an image to upload</label>
      <input id="file-upload-image" type="file" accept="image/*" onChange={handleImageChange} style ={{ margin:'20px'}}/>

      {image && <div>
        <h2>Preview:</h2>
        <img src={image} alt="Uploaded Preview" style={{maxWidth:'300px', maxHeight:'300px'}}/>
      </div>}
    </div>
  );
  }

  export default ImageUpload;