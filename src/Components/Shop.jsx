import React from 'react'
import Hero from './Hero'
import Popular from './Popular/Popular'
import Offers from './Offers/Offers'
import NewCollection from './NewCollection/NewCollection'

const Shop = () => {
  return (
    <div>
         <Hero/>
         <Popular/>
         <Offers/>
         <NewCollection/>
    </div>
  )
}

export default Shop