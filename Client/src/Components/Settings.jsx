import React, { useEffect, useState } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import pp from '../assets/pp.jpg';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'





function Settings() {

  
  const [user, setUser] = useState({});

  useEffect(() => {
    const username = Cookies.get("username");
    if (username) {
        // Fetch user's info
        axios.get(`http://localhost:3000/user/${username}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("Error fetching user info:", error);
            });
    } else {
        console.error("Username not found in cookies");
    }
}, []);
  

  return (
    <>
    <div className='flex bg-gray-100'>
    <Navbar/>
<div>
    <h1 className=' text-2xl font-medium pt-4 pl-5'> Personal Settings </h1>
    <p className=' text-gray-400  pl-5'> Manage Your Account Settings and Personal Details </p>
    <div className='bg-white w-[40rem] h-[8rem] rounded-xl ml-10 flex justify-start   mt-4'>
    <div className=' w-32 h-32 rounded-full mt-3 ml-5  '><img className='w-24 h-24 rounded-full ' src={pp} alt="" /></div>
   <div>

   <h1 className='text-3xl font-medium '>{user.UserName}</h1>
<h2 className='text-lg'>{user.Email}</h2> 
<h2 className='text-gray-400  text-lg'>Traveller, Youtuber</h2>
<Link to='/useredit'><button className='  bg-yellow-400 text-white rounded-lg font-medium text-[14px] w-12 h-6'>Edit</button>
</Link>

   </div>
   
  <button className='ml-12 mt-10 bg-yellow-400 text-white rounded-lg font-medium text-xs w-24 h-10'>Update Photo</button>
  <button className='ml-5 border-2 mt-10 border-yellow-400 text-yellow-400 text-xs rounded-lg font-medium  w-24 h-10'>Remove Photo</button>
    </div>
    <h2 className='text-xl pt-4 pl-10 font-medium'>About</h2>
<textarea name="" id="" className='w-[40rem] h-[5rem]  ml-10'></textarea>

    <h2 className=' text-2xl font-medium pt-4 pl-5'>Security</h2>
    <p className=' text-gray-400  pl-5'> If you suspect your password has been compromised, change it immediately. </p>
    <div className='bg-white w-[40rem] h-[8rem] rounded-xl ml-10    mt-4'>
      <h2 className='text-lg font-medium pl-5 pt-2'>Change Password </h2>
      <div className='border-2 pl-3  rounded-md w-[20rem] mt-3 ml-5 border-black' >{user.Password}</div>
      <Link to='/useredit'><button className='  bg-yellow-400 text-white  mt-2 ml-5 rounded-lg font-medium text-[14px] w-14 h-7'>Change</button>
</Link>
 
    </div>
    </div>
    </div>
    </>
  )
}

export default Settings

