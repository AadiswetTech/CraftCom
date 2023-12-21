import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FcShop } from "react-icons/fc";

const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  return (
    <nav className="bg-slate-100 sticky h-10 top-0 flex  flex-row justify-around p-4 shadow-md">
         <div className="flex items-center gap-3 w-[100vw]">
                  
                  <FcShop size={30}/>
                  <p className="text-[#171717] text-3xl font-semibold">CraftCom</p>
         </div>
         <div className="flex items-center">
         <ul className="flex flex-row items-center list-none gap-4 text-lg text-teal-900">
                  <li onClick={()=>setMenu("shop")} className="cursor-pointer"><Link to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                  <li onClick={()=>setMenu("womens")} className="cursor-pointer"><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}  </li>
                  <li onClick={()=>setMenu("mens")} className="cursor-pointer"><Link to='/mens'>Mens</Link> {menu==="mens"?<hr/>:<></>}</li>
                  <li onClick={()=>setMenu("kids")} className="cursor-pointer"><Link to='kids'>Kids</Link> {menu==="kids" ?<hr/>:<></>} </li>
         </ul>
         </div>
         
         <div className="flex items-center justify-between">
          <button className='outline-none rounded-lg border-lime-800 text-[#0c1e0d]'> Login </button>
          <Link to="/cart"> <FaShoppingCart size={30}/></Link>
         
          <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-30px] text-lg ">0</div>
               
         </div>
    </nav>
  )
}

export default Navbar