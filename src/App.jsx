

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import Shop from "./Components/Shop"
import ShopCategory from './Components/ShopCategory'

function App() {
  

  return (
    <>
   
     <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<ShopCategory category="mens"/>}></Route>
        <Route path="/womens" element={<ShopCategory category="womens"/>}></Route>
        <Route path="/product" element={<ShopCategory category="mens"/>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
