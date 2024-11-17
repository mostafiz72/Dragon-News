import React from 'react'
import Marquee from "react-fast-marquee";

export default function LatextNews() {
  return (
    <div>
       <div className=' container mx-auto flex gap-3 bg-slate-200 py-3 px-5 rounded-lg my-5'>
        <p className=' btn btn-error'>Breaking News</p>
        <Marquee speed={50} pauseOnHover={true} direction="left">
          <p className=' pr-80 font-semibold'>React is a popular JavaScript library for building user interfaces, developed by Facebook. It is based on a component-driven architecture, enabling developers to create reusable UI components.</p>
        </Marquee>
       </div>
    </div>
  )
}
