import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import './App.css'

function App() {
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
  
  function VideoUpload(){
    const [video,setVideo]=useState(null);

    function handleVideoChange(e){
      const file =e.target.files[0];
      if (file) {
      setVideo(URL.createObjectURL(file));
    }
  }
  return(
    <div style={{marginTop:'50px'}}>
      <label htmlFor="file-upload-video" className=' video'>
        Choose a video to upload</label>
      <input id="file-upload-video" type="file" accept="video/*" onChange={handleVideoChange} style ={{display: "none" ,margin:'20px'}}/>
 
      {video && <div>
        <h2>Preview:</h2>
          <video
            controls
            src={video}
            type="video/mp4"
            style={{ width: "100%", maxWidth: "600px" }}
          >
          Your browser does not support the video tag.
        </video>
      </div>
      }
    </div>
  );
  }
  
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

  return (
    <table id="root">
      <tr>
        <td>
          <ImageUpload />
        </td>
      </tr>
      <tr>
        <td>
          <VideoUpload />
        </td>
      </tr>
      <tr>
        <td>
          <SoundUpload />
        </td>
      </tr>
      <tr>
        <td>
          <BlackBackground />
        </td>
      </tr>
      <tr>
        <td>
          <RedBackground />
        </td>
      </tr>
      <tr>
        <td>
          <GreenBackground />
        </td>   
      </tr>
    </table>
  );  
}
createRoot(document.getElementById('root')).render((<App />));
export default App;
