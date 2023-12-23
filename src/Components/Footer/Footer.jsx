import React from 'react'
import { FaInstagramSquare, FaOptinMonster, FaPinterestSquare, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-[95vw] mx-auto border">
     <div className=" flex text-center justify-center gap-4">
         <FaOptinMonster/>
         <p className="text-blue-700">SHOPPER</p>
         </div>    
         <ul className="flex flex-row w-full justify-center list-none gap-4 text-amber-700 text-center">
                  <li className="cursor-pointer">company</li>
                  <li className="cursor-pointer hover:translate-x-4">sales</li>
                  <li className="cursor-pointer">about</li>
                  <li className="cursor-pointer hover:translate-x-4">offers</li>
                  <li className="cursor-pointer">contact</li>
         </ul>
         <div className="">
                  <div className="text-2xl flex flex-row justify-center gap-8">
                           <FaInstagramSquare/>
                           <FaPinterestSquare/>
                           <FaWhatsappSquare/>
                  </div>
         </div>
         <div className="">
                  <hr/>
                  <p className="">copyright @2023 AadiswetTech Reserved</p>
         </div>
    </div>
  )
}

export default Footer