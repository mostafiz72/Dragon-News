import moment from 'moment';
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import LatextNews from './LatextNews';
import titleLogo from '../assets/images/logo.png';
import Login from './LoginWith/Login';
import Qzon from './QZone/Qzon';
import FindIcon from './FindUs/FindIcon';

export default function ReadNews() {
    const data = useLoaderData();
    const news = data.data[0];
    const { image_url, title, details } = news;


    return (
        <>
            <div>
                <div className=' flex flex-col justify-center items-center my-5'>
                    <img src={titleLogo} alt="" />
                </div>
                <div className=' text-bold font-xl text center'>
                    <p className=' text-lg font-semibold my-3'>Journalism Without Fear or Favour</p>
                    <p className=' text-lg font-bold'>{moment().format("dddd, MMMM Do YYYY")}</p>
                </div>
                <LatextNews /> {/* ai conponents theke marquee sliding ta show kortese */}

                <h2 className=' text-xl font-semibold text-left'>Dragon News</h2>
                <div className=' grid grid-cols-4'>
                    <div className=' w-full col-span-3'>
                        <div className="card card-compact bg-base-100">
                            <figure>
                                <img className=' w-full object-cover'
                                    src={image_url}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-0">
                                <h2 className="card-title mt-10 text-3xl text-left">{title}</h2>
                                <p className=' text-left text-xl my-5'>{details}</p>
                                <div className="card-actions justify-start">
                                    <Link to="/" className="btn btn-primary"><FaLongArrowAltLeft /> All News in category</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right section start here now */}

                    <div>
                        <aside>
                            <h2 className=' text-left font-semibold mb-5'>Login With</h2>
                            <Login />  {/* Login jsx file theke inport kore design ta bosano hoyse */}
                            <h2 className=' text-left font-semibold mt-10 mb-5'>Find Us On</h2>
                            <FindIcon />  {/* FindUs folder theke inport kore design ta bosano hoyse */}
                            <Qzon />
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}
