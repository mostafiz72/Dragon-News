import React from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <>
     
     <div className=' flex gap-3 flex-col items-center w-full'>
          <button className=' btn w-full'><FaGoogle /> Login With Google</button>
          <button className=' btn w-full'><FaGithub /> Login With Github</button>
        </div>
      
    </>
  )
}
