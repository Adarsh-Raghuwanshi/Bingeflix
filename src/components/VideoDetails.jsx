import React from 'react'

const VideoDetails = ({title, description}) => {
  return (
    <div className='py-44 px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='font-bold text-3xl my-5'>{title}</h1>
        <p className='w-1/3 mb-5'>{description}</p>
        <button className='bg-white text-black font-bold py-1 cursor-pointer px-5 rounded-xs hover:opacity-80'>Play</button>
        <button className='bg-gray-600 text-white py-1 cursor-pointer px-5 rounded-xs mx-2'>More Info</button>
    </div>
  )
}

export default VideoDetails