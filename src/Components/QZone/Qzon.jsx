import React from 'react'
import Swimming from '../../assets/images/swimming.png'
import ClassChild from '../../assets/images/class.png'
import PlayGround from '../../assets/images/playground.png'
import AddImg from '../../assets/images/bg.png'

export default function Qzon() {
  return (
    <>
     <div className=' bg-slate-100 p-3 my-10 rounded-md'>
     <h2 className=' text-left font-semibold mb-5'>Q-Zone</h2>
        <div>
            <img src={Swimming} alt="" />
        </div>
        <div className=' my-5'>
            <img src={ClassChild} alt="" />
        </div>
        <div>
            <img src={PlayGround} alt="" />
        </div>
     </div>

    {/* link image or link text section start here now */}
    {/* link image or link text section start here now */}

    <div>
        <img className=' w-full h-full rounded-md' src={AddImg} alt="" />
    </div>


    </>
  )
}
