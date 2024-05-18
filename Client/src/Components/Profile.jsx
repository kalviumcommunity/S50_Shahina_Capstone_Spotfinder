import React , { useState, useEffect }  from 'react' 
import pp from '../assets/pp.jpg';
import pen from '../assets/pen.png'
import bin from '../assets/bin.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Edit from './Edit'
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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/post/posts/${id}`)
            .then(response => {
                console.log(response.data);
               
                setPost(Post.filter(post => post.id !== id));
            })
            .catch(error => {
                console.error("Error deleting post:", error);
            });
    };
    return (
        <>
            <div className='flex'>

                <Navbar />
                <div className='pt-5 pl-5  '>
                    <div className='flex  pl-4'>
                        <div className=' w-32 h-32 rounded-full '><img className='w-32 h-32 rounded-full ' src={pp} alt="" /></div>

                        <div className='pl-7   leading-8'>
                            <div className='flex justify-between'>
                            <h3 className=' text-4xl'>Zaraa</h3>
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
<div className=' pt-5 flex overflow-x-hidden h-[26rem] w-[60rem] '>
<div className=' grid grid-cols-3  '>

            {Post.map((post, index) => (
          
  
          <div className='flex flex-wrap relative w-[20rem] mt-3 h-[20rem] pr-5 ' key={index}>
          <img className='w-[20rem] h-[20rem]' src={post.Image} loading='eager' />
<Link to={`/edit/${post._id}`}>
          <button ><img className='absolute bottom-0 left-0 w-8 h-8' src={pen} alt="" /></button>
          </Link>
    

            <button onClick={handleDelete}> <img className='absolute bottom-0 left-10 w-8 h-8' src={bin} alt="" /></button>
         
        </div>           
               
            ))}
</div> 
              </div>
             </div>
                
            </div>
        </>
    )
}

export default Profile