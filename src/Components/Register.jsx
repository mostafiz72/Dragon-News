import React, { useContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { AuthContext } from './Provider/AuthProvider'

export default function Register() {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();

    const handleShow = () => {
        setShow(!show);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the data to the server
        const form = new FormData(e.target);  // Nutun vabe input form thek data neuya jai ta amara dekhalam
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        console.log({ name, photo, email, password});

        createNewUser(email, password)
        .then(result => {
            console.log("User created successfully", result);
            setUser(result.user);
            updateUserProfile({displayName: name, photoURL: photo})
            .then(result => {
              Navigate("/")
            })
            .catch(err => console.log(err))
        })
        .catch (error => console.log(error))
        
    }



  return (
    <>
    <Navbar />
            <div className=' flex justify-center items-center h-screen'>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">FullName</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show?"text":"password"} placeholder="password" name='password' className="input input-bordered" required />
                            <button onClick={handleShow} className=' text-xl absolute top-[52px] right-5'>{show?<IoMdEye />:<IoMdEyeOff />}</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className=' text-center font-semibold mt-5'>Allready Have An Account ? <Link to="/login" className="text-red-500 hover:underline">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}
