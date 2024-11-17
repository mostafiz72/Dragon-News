import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import profileLogo from '../assets/images/user.png';
import { AuthContext } from '../Components/Provider/AuthProvider';

export default function Navbar() {
  const { user, singOut } = useContext(AuthContext)
  console.log(import.meta.env.VITE_a);
  
  return (
    <>
      <nav className=' flex justify-between items-center text-lg font-semibold'>
        <div>{user && user.displayName}</div> 
        {/* ekhane bola hoyse jodi user er mordhe kicu thake ta hole tumi amake tar nam ta show koro na hole error deyo na */}
        <div className=' hidden md:block'>
            <ul className=' flex items-center gap-5'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/career">Career</Link></li>
            </ul>
        </div>
        <div className=' flex items-center gap-5'>
            <div className=' cursor-pointer'>
              {user && user.email? <img className=' w-10 h-10 rounded-full' src={user.photoURL} alt="" /> : <img src={profileLogo} alt="" />} 
            </div>
            {
              user && user.email?
              <button onClick={singOut} className=' btn btn-accent cursor-pointer'>Log-Out</button>
              :
              <div><Link to="/login" className=' btn btn-accent cursor-pointer'>Login</Link></div>
            }
        </div>
      </nav>
    </>
  )
}
