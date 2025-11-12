 import React, { useState } from 'react';
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

  export default VideoUpload;