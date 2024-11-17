import React, { useEffect, useState } from 'react'
import Login from './LoginWith/Login';
import FindIcon from './FindUs/FindIcon';
import Qzon from './QZone/Qzon';
import { NavLink, Outlet } from 'react-router-dom';
import CategoryNews from './News/CategoryNews';
import moment from 'moment';
import Navbar from '../Navbar/Navbar';
import titleLogo from '../assets/images/logo.png';
import LatextNews from './LatextNews';


export default function Home() {

  const [categorys, setCategorys] = useState([]);


 useEffect(()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res => res.json())
  .then(data => setCategorys(data.data.news_category))
}, [])

  return (
    <>

<div className=' flex flex-col justify-center items-center my-5'>
        <img src={titleLogo} alt="" />
    </div>
    <div className=' text-bold font-xl text center'>
        <p className=' text-lg font-semibold my-3'>Journalism Without Fear or Favour</p>
        <p className=' text-lg font-bold'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
      <LatextNews /> {/* ai conponents theke marquee sliding ta show kortese */}
      <Navbar />   {/* ai conponents theke navbar ta show kortese */}

      <div className=' grid md:grid-cols-4 gap-5 mt-20'>
        <aside className=''>
          <h2 className=' text-left font-semibold mb-5'>All Category ({categorys.length})</h2>
          <div className=' flex flex-col gap-3'>
            {categorys.map(category => (
              <div key={category.category_id}>
                <NavLink to={`/category/${category.category_id}`} className=' btn w-full'>{category.category_name}</NavLink>
              </div>
            ))}
          </div>
        </aside>

     {/* Main aside start here now */}

        <div className=' md:col-span-2'>
        <h2 className=' text-center font-semibold mb-5'>Dragon News Home</h2>
        <Outlet />
        </div>

     {/* Right aside start here now */}
     {/* Right aside start here now */}

        <aside>
        <h2 className=' text-left font-semibold mb-5'>Login With</h2>
           <Login />  {/* Login jsx file theke inport kore design ta bosano hoyse */}
        <h2 className=' text-left font-semibold mt-10 mb-5'>Find Us On</h2>
           <FindIcon />  {/* FindUs folder theke inport kore design ta bosano hoyse */}
           <Qzon />
        </aside>
      </div>
    </>
  )
}
