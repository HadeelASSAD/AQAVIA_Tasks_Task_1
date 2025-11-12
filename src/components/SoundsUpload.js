import React, { useState } from 'react';

 function SoundUpload(){
    const [sound,setSound]=useState(null);

    function handleSoundChange(e){
      const file =e.target.files[0];
      if (file) {
      setSound(URL.createObjectURL(file));
    }
  }
  return(
    <div style={{marginTop:'50px'}}>
      <label htmlFor="file-upload-audio" className=' audio'>
        Choose a sound file to upload</label>
      <input id="file-upload-audio" type="file" accept="audio/*" onChange={handleSoundChange} style ={{ margin:'20px'}}/>

      {sound && <div>
        <h2>Preview:</h2>
        <audio controls>
          <source src={sound} />
          Your browser does not support the audio tag.
        </audio>
      </div>}
    </div>
  );
  }

  export default SoundUpload;