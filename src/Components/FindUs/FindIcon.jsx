import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function FindIcon() {
  return (
    <>
        <div className=' flex gap-3 flex-col items-center w-full'>
        <div className="join join-vertical w-full">
            <button className=" bg-base-100 btn join-item justify-start"><span  className=' bg-gray-200 w-8 h-8 rounded-full p-2 flex justify-center items-center text-lg'><FaFacebook /></span> Facebook</button>
            <button className=" bg-base-100 btn join-item justify-start"><span  className=' bg-gray-200 w-8 h-8 rounded-full p-2 flex justify-center items-center text-lg'><FaTwitter /></span> Twitter</button>
            <button className=" bg-base-100 btn join-item justify-start"><span  className=' bg-gray-200 w-8 h-8 rounded-full p-2 flex justify-center items-center text-lg'><FaInstagram /></span> Instragram</button>
            </div>
        </div>
    </>
  )
}
