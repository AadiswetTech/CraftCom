import React from 'react'
import Hero from './Hero'
import Popular from './Popular/Popular'
import Offers from './Offers/Offers'
import NewCollection from './NewCollection/NewCollection'
import Footer from './Footer/Footer'

const Shop = () => {
  return (
    <div>
         <Hero/>
         <Popular/>
         <Offers/>
         <NewCollection/>
         <Footer/>
    </div>
  )
}

export default Shop