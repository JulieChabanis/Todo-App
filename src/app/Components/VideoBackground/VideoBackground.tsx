import React from 'react';
import styles from './videoBackground.module.css'

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        className='w-full' 
        width={4000}
      >
        <source src="/video/video-background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
