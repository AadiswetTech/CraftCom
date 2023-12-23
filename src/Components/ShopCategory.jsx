/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { all_products } from '../producdata/all_products'
import Item from './items/Item'

const ShopCategory = (props) => {
  const {all_products}=useContext(ShopContext)
  return (
   <div className="flex flex-col justify-around">
    <img src={props.banner} className="w-[90vw] mx-auto lg:w-[70vw] h-[40vh]"/>
<div className="">
  <p>
    <span>showing 1-12</span> out of 36 products
  </p>
  <div className="">
    Sort by <feDropShadow/>
  </div>
</div>
<div className="w-[90vw] mx-auto flex flex-row flex-wrap gap-6">
  {all_products.map((item,i)=>
  {
    if(props.category ===item.category)
    {
     return  <Item key={i}  name={item.name} image={item.image} new_price={item.new_price}/>
    }
  })}
</div>
   </div>
  )
}

export default ShopCategory