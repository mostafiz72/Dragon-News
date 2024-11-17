import React, { useContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { AuthContext } from './Provider/AuthProvider'

export default function LoginPage() {
   const { userLogin, setUser } = useContext(AuthContext)
   const location = useLocation();
   const Navigate = useNavigate();
//    console.log(location);
   
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the login logic
        const form = new FormData(e.target);  // Nutun vabe input form thek data neuya jai ta amara dekhalam
        const email = form.get("email");
        const password = form.get("password");
        // console.log({ email, password });
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            Navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            alert(error.message);
        })
    }

    return (
        <>
            <Navbar />
            <div className=' flex justify-center items-center h-screen'>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show?"text":"password"} name='password' placeholder="password" className="input input-bordered" required />
                            <button onClick={handleShow} className=' text-xl absolute top-[52px] right-5'>{show?<IoMdEye />:<IoMdEyeOff />}</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className=' text-center font-semibold mt-5'>Don't Have An Account ? <Link to="/register" className="text-red-500 hover:underline">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
