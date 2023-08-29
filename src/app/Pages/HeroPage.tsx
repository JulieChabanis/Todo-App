import React from 'react'
import VideoBackground from '../Components/VideoBackground/VideoBackground'
import ButtonBackground from '../Components/ButtonBackground/ButtonBackground'

const HeroPage = () => {
  return (
    <div className="relative min-h-screen">
    <VideoBackground />

    <div>
      <ButtonBackground />
    </div>
  </div>
  )
}

export default HeroPage