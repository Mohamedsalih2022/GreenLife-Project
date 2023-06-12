import React from 'react'
import Navvbar from './Navvbar'
import HomePage from './HomePage'
import Part2 from './Part2'
import OurSer from './OurSer'
import Footer from './Footer'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Scrollup from './Scrollup'
const App = (props) => {
    
  return (
    <div>
        <Navvbar/>  
        <BrowserRouter>
          <Routes>
              <Route>
              <Route path='/' element={<HomePage/>} />
              <Route path='/About' element={<AboutUs/>} />
              <Route path='/ContactUs' element={<ContactUs/>} />

              </Route>
          </Routes>
        
        </BrowserRouter>
        <Scrollup/>
        
        <Footer/>
    </div>
  )
}

export default App

