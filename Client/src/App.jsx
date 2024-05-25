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
import Edit from './Components/Edit'
import Settings from './Components/Settings'
import UserEdit from './Components/UserEdit'

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
           <Route path='/edit/:id' element={<Edit/>}/>
           <Route path='/settings' element={<Settings/>}/>
           <Route path='/useredit' element={<UserEdit/>}/>
    </Routes>
  )
}

export default App