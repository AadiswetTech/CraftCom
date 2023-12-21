import React from 'react'

const Offers = () => {
  return (
    <div className=' mx-auto w-[75vw] h-[60vh] px-24 py-10 bg-gradient-to-r from-slate-100  to-red-200 flex flex-row'>
         <div className="flex flex-col justify-center gap-3 flex-1 ">
                  <h1 className="text-yellow-600  text-2xl font-mono">Exclusive:</h1>
                  <h1 className='text-xl'>offers for you</h1>
                  <p className="text-lg">ONLY ON BEST SELLER PRODUCTS</p>
                  <button className='w-[9vw] border-lg font-light text-lg bg-red-600 rounded-xl'>Check Now {">"}</button>
         </div>
         <div className="w-[50vw] h-[40vh] pt-6 pl-12">
                  <img src="./offers.jpg" className="w-full h-[40vh]"/>
         </div>
    </div>
  )
}

export default Offers