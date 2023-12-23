

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Shop from "./Components/Shop"
import ShopCategory from './Components/ShopCategory'
import mensbanner from "/mensbanner.jpg"
import womensbanner from "/womensbanner.jpg"
import kidsbanner from "/kidsbanner.jpg"

function App() {
  

  return (
    <>
   
     <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<ShopCategory banner={mensbanner} category="mens"/>}></Route>
        <Route path="/womens" element={<ShopCategory banner={womensbanner} category="womens"/>}></Route>
        <Route path="/kids" element={<ShopCategory banner={kidsbanner} category="kids"/>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
