import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const Hero = () => {
  return (
   <div className="relative  bg-gradient-to-r from-slate-100  to-orange-300">
         <div className=" border grid grid-col-1 lg:grid-cols-2 w-full  gap-12 pl-[20px]">
               <div className="pt-12 flex flex-col pl-9 gap-7 bg-slate-200  border rounded-r-xl ">
               <div className="flex flex-col  text-6xl font-semibold  bg-white">
                           
                                    <p className="tex-[#171717]">new</p>
                                    <img src=""/>
                           
                           <p>collection</p>
                           <p>for everyone</p>
                  </div>
               
                 
                 
                           <div className="text-2xl text-center w-32 inline-flex rounded-lg border bg-white">Latest Collection  <FaArrowRight /></div>
                          
                 
                  </div>
        
         <div className="pt-4 pl-6 bg-none">
<img src="./Shopping.png" className=" w-[100vw] h-[70vh] lg:w-[40vw] px-7"/>
         </div>
   </div>
   <div className='absolute  px-8 w-52 h-24 bottom-[-7vw] left-6  z-1 lg:bottom-[-7vw] bg-red-400'>h</div>
   </div>
  )
}

export default Hero