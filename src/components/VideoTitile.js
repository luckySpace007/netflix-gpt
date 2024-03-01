import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitile = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-16 text-lg rounded-lg hover:bg-opacity-80'>
              <FaRegPlayCircle />
            </button>
            <button className='mx-2 bg-gray-500 text-white p-4 px-16 text-lg rounded-lg hover:bg-opacity-90'>
              <IoIosInformationCircleOutline />
            </button>
        </div>                              
    </div>
  )
}

export default VideoTitile