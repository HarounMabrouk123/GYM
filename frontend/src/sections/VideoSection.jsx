import React from 'react'
import video from '../assets/images/video.mp4'

const VideoSection = () => {
  return (
    <div className='flex justify-center items-center'>
            <div className='relative h-[80vh] w-[80%]'>
                <video className='w-[100%] h-[100%] object-cover' src={video} autoPlay loop muted></video>
                <h1 className='w-[100%] h-[100%] font-bebas capitalize text-3xl lg:text-4xl font-bold text-white  absolute top-0 flex flex-col justify-center items-center'>One day or day one</h1>
            </div>
    </div>

  )
}

export default VideoSection