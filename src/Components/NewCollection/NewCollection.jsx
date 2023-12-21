import React from 'react'
import Item from '../items/Item'
import { new_collection } from '../../producdata/new_collection'

const NewCollection = () => {
  return (
         <section className="mt-2 mx-auto">
<div className=" px-24 ">
         <h1 className="">New Collection </h1>
   <hr className="bg-red-500 h-[2vh] w-[25vw] "/>
   <br/>
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full">
         {
                  new_collection.map((item,i)=>
                  { 
return <Item key={i} name={item.name} image={item.image} new_price={item.new_price}/>

                  })
         }
         <Item/>
   </div>
</div>
         </section>
    
  )
}

export default NewCollection