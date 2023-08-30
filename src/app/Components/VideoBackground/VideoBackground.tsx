import React from 'react';

const VideoBackground = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <source src="/video/video-background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
