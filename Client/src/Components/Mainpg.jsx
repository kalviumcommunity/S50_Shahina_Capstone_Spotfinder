import React, { useState, useEffect } from 'react'
// import Slider from "react-slick";
import Navbar from './Navbar';
import user from '../assets/user.png'
import { Link } from 'react-router-dom'
import com from '../assets/com.png';
import heart from '../assets/heart.png';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Mainpg() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const navigate = useNavigate();
  const username = Cookies.get('username');
  const [postdata, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/post")
        setPostData(response.data)
      } catch (err) {
        console.log("Error", err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(postdata);
  }, [postdata]);

  const LogOut = () => {
    console.log("clicked")
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    Cookies.remove('token');
    Cookies.remove('username');
    Cookies.remove('userData');
    // navigate('/');
    axios.post('http://localhost:3000/logout', {
      withCredentials: true
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response)
          console.log('Logged out successfully');
        } else {
          console.error('Logout failed');
        }
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });

    navigate("/")
    // }
  }
  const Cookie = () => {
    const givenName = Cookies.get('given_name');
    return givenName;
  }

  return (
    <>
      <div className='flex ' >

        <Navbar />



        <div className=' w-4/5 ' >
          <nav className=' flex justify-around text-center   items-center'>
            <input type="text" placeholder='Search ' className='border-[2px] mt-3 border-yellow-400 rounded-lg pl-2 w-[30rem] h-10' />
            <Link to='/Profile'>
              <div className=' w-[9rem] h-9 bg-yellow-400  rounded-lg  flex justify-center text-center cursor-pointer items-center ' ><img className='h-7 w-10 pl-3' src={user} alt="" /><h5 className=' text-white '>{username}</h5></div>
              {/* onClick={LogOut} */}
            </Link>
           
            <div className='w-14 h-7 bg-yellow-400  rounded-full  '><div className='bg-white w-6 h-6 rounded-full border ml-0.5 mt-0.5'></div></div>
          </nav>
          <div className=' h-[33rem] w-[53rem] overflow-auto ml-10  bigdiv '  >
        
            {postdata.map((post, index) => (
              <div className='w-[40rem] h-[53rem] mb-10 border-2 border mt-8 border-yellow-300 shadow-lg rounded-lg' key={index}>
                <div className='flex text-center items-center'>
                  <div className='bg-white w-[2rem] h-[2rem] ml-2 mt-2 rounded-full border-2'></div>
                  <h3 className='ml-3'>{post.UserName}</h3>
                </div>


                <div className='ml-10 border flex w-[35rem] h-[35rem] '>
                  {/* <Slider {...settings}> */}

                  <img className='w-[35rem] h-[35rem]' src={post.Image} />

                  {/* </Slider> */}
                </div>


                <div className='flex pl-10'>
                  <div><img className='h-5 mr-3 mt-3' src={heart} alt='' /><p className='text-xs'>{post.Like}</p></div>
                  <div><img className='h-5 mr-3 mt-3 transform rotate-180' src={heart} alt='' /><p className='text-xs'>{post.Unlike}</p></div>
                  <div><img className='h-5 mr-3 mt-3' src={com} alt='' /><p className='text-xs'>795</p></div>
                </div>
                <p className='pl-10'> <b> Spot:</b>{post.Spot}</p>
                <p className='pl-10'> <b>Location:</b>{post.Location}</p>
                <p className='h-32 font-light pl-10'>{post.Description}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default Mainpg