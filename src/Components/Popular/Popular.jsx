import React from 'react'
import Item from '../items/Item'
import { women_product } from '../../producdata/women_product'
const Popular = () => {
  return (
    <div className=" flex flex-col px-24 py-4 gap-3">
<h1 className="font-semibold text-2xl">Popular In Women</h1>
<hr className='h-[2vh] w-[30vw] bg-red-900'/>
<div className='flex flex-row flex-wrap gap-3 w-[90vw] px-6'>
         {women_product.map((item,index)=>
         {
                  return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
</div>
    </div>
  )
}

export default Popular