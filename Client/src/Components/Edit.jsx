import React, { useEffect, useState } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const {id} = useParams();
  const[values,setValues]=useState({
    id:id,
    Spot:'',
    Location:'',
    Image:'',
     Description:''
  })
  useEffect(() => {
    axios.get(`http://localhost:3000/post/post/${id}`)
      .then(res => {
    setValues({...values,Spot:res.data.Spot,Location:res.data.Location,Image:res.data.Image,Description:res.data.Description})
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3000/post/update/${id}`,values)
    .then(res => {
navigate('/Profile')
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
    <form onSubmit={handleSubmit}  className='mt-10'>
      
    <input type="text" name="Spot"  className='border mb-5 w-[25rem] h-[2.5rem]  ml-9 ' placeholder='Spot:' value={values.Spot} onChange={e=>setValues({...values, Spot:e.target.value})}/><br />
<input type="text" name="Location" className='border mb-5 w-[25rem] h-[2.5rem] ml-9 ' placeholder='Location: ' value={values.Location} onChange={e=>setValues({...values, Location:e.target.value})}/><br />
<input type="text" name="Image" className='border  mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Image' value={values.Image} onChange={e=>setValues({...values, Image:e.target.value})}/><br />
<input type="text" name="Description" className='border  mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Description:' value={values.Description} onChange={e=>setValues({...values, Description:e.target.value})}/><br />

<button  className='rounded-lg border-2 h-10 w-14'>Cancel</button>
<button className='bg-yellow-400 ml-10 rounded-lg text-white h-10 w-14'>Update</button>
</form>
    </div>
   </div>
   </>
  )
}

export default Edit