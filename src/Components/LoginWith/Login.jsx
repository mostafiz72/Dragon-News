import React, { useContext } from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

export default function Login() {

  const { singInWithGoogle, singInWithGithub } = useContext(AuthContext);
 
   /// Sinnin with Google functionality start here now******************
   /// Sinnin with Google functionality start here now******************


  const handleGoogle = () => {
    singInWithGoogle()
    .then(result => {
      return result;
    })
    .catch(err => {
      return err
    })
    
  }

/// Sinnin with github functionality start here now******************
/// Sinnin with github functionality start here now******************

  const handleGithub = () => {
    singInWithGithub()
    .then(result => {
      return result;
    })
    .catch(err => {
      return err
    })
    
  }


  return (
    <>
     
     <div className=' flex gap-3 flex-col items-center w-full'>
          <button onClick={handleGoogle} className=' btn w-full'><FaGoogle /> Login With Google</button>
          <button onClick={handleGithub} className=' btn w-full'><FaGithub /> Login With Github</button>
        </div>
      
    </>
  )
}
