import React from 'react'
import{Route,Routes} from 'react-router-dom'
import About from './Components/About'
import Landingpg from "./Components/Landingpg"
import Review from './Components/Review'
import Mainpg from './Components/Mainpg'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Contacts from './Components/Contacts'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Add from './Components/Add'
import Top from './Components/Top'
import Map from './Components/Map'


function App() {
  return (
    <Routes>
           <Route path='/' element={<Landingpg/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Review' element={<Review/>}/>
           <Route path='/Mainpg' element={<Mainpg/>}/>
           <Route path='/SignUp' element={<SignUp/>}/>
           <Route path='/SignIn' element={<SignIn/>}/>
           <Route path='/Contacts' element={<Contacts/>}/>
           <Route path='/Navbar' element={<Navbar/>}/>
           <Route path='/Profile' element={<Profile/>}/>
           <Route path='/Add' element={<Add/>}/>
           <Route path='/Top' element={<Top/>}/>
           <Route path='/Map' element={<Map/>}/>

    </Routes>
  )
}

export default App