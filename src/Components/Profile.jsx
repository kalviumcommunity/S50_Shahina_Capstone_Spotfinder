import React , { useState, useEffect }  from 'react' 
import pp from '../assets/pp.jpg';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function Profile() {
    const [Post,setPost]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        const username=Cookies.get("username")
        axios.get("http://localhost:3000/post")
        .then(response=>{
            const filterPost=response.data.filter(post=>post.UserName===username)
        setPost(filterPost)
        })
        .catch(error=>console.log("Error fetching post:",error))
    },[])
    return (
        <>
            <div className='flex'>

                <Navbar />
                <div className='pt-5 pl-5  '>
                    <div className='flex  pl-4'>
                        <div className=' w-32 h-32 rounded-full '><img className='w-32 h-32 rounded-full ' src={pp} alt="" /></div>

                        <div className='pl-7  leading-8'>
                            <div className='flex justify-between'>
                            <h3 className=' text-4xl'>Drew Binskey</h3>
                            <Link to="/Add">
                            <button className='rounded-lg w-[8rem] h-[2.5rem] bg-yellow-400   text-white text-xl'>Create</button>
                            </Link>
                            </div>
                            <h5 className='text-slate-700'>Traveller, Youtuber</h5>
                            <p className=' text-slate-400'>Exploring new destinations, cultures, and experiences fills me with an unparalleled sense of joy and wonder. </p>
                        </div>
                    </div>


<div className='flex justify-center'>

                    <div className='flex items-center gap-10 '>
                
                        <hr className='w-96' />
                        <div className='text-2xl text-slate-700'>Your Posts</div>
                        <hr className='w-96' />
                    </div>
            </div>
<div className=' mt-8 flex ml-5 overflow-auto h-[24rem]'>
            {Post.map((post, index) => (
              <div className='w-[20rem] h-[20rem] mb-10 ml-5  rounded-lg' key={index}>
            

                <div className='  flex w-[20rem] h-[20rem] ml-4 '>
                  <img className='w-[rem] h-[rem]' src={post.Image} />
                </div>        
              </div>
            ))}

</div> 
                </div>
            </div>
        </>
    )
}

export default Profile