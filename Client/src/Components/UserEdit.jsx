import React, { useEffect, useState } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserEdit() {
    const {username} = useParams();
  const[values,setValues]=useState({
    UserName:username,
    Email:'',
    Password:''
  
  })
  useEffect(() => {
    axios.get(`http://localhost:3000/user/Zaraa`)
      .then(res => {
    setValues({...values,UserName:res.data.UserName,Email:res.data.Email,Password:res.data.Password})
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3000/user/data/Zaraa`,values)
    .then(res => {
navigate('/settings')
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
<>
   <div className=' bg-black bg-opacity-30 fixed flex items-center justify-center inset-0 w-full h-full'>
    <div className='bg-white h-[25rem]  border-2 border-yellow rounded-lg w-[35rem] '>
    <h2 className='text-5xl  text-yellow-400'>Update</h2>
    <form className='mt-10' onSubmit={handleSubmit}  >
      
    <input type="text" name="UserName"  className='border mb-5 w-[25rem] h-[2.5rem]  ml-9 ' placeholder='UserName:' value={values.UserName} onChange={e=>setValues({...values, UserName:e.target.value})} /><br />
<input type="text" name="Email" className='border mb-5 w-[25rem] h-[2.5rem] ml-9 ' placeholder='Email: ' value={values.Email} onChange={e=>setValues({...values, Email:e.target.value})}/><br />
<input type="text" name="Password" className='border  mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Password' value={values.Password} onChange={e=>setValues({...values, Password:e.target.value})}/><br />

<button  className='rounded-lg border-2 h-10 w-14'>Cancel</button>
<button className='bg-yellow-400 ml-10 rounded-lg text-white h-10 w-14'>Update</button>
</form>

<button className='bg-yellow-400 ml-10 rounded-lg text-white h-10 w-14'>Update</button>

    </div>
   </div>
   </>
  )
}

export default UserEdit

