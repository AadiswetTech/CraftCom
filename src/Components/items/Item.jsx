import React from 'react'

const Item = (props) => {
  return (
    <div className="w-[360px] hover:scale-110  duration-700 ">
         <img className="w-[90vw] h-[40vh] lg:w-[32vw] mx-auto rounded-lg" src={props.image}/>
         <p className="mx-[6px] my-[0px]">{props.name}</p>
         <div className="flex gap-5 font-semibold">
              {props.new_price}   
         </div>
         <div className="text-[#8c8c8c] text-2xl font-medium line-through">
                  {props.old_price}
         </div>

    </div>
  )
}

export default Item