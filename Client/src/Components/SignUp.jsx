import React from 'react'
import bg from '../assets/bg.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";


function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userdata, setuserdata] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { UserName, Email, Password } = data;
      const response = await axios.post('http://localhost:3000/user/signup', { UserName, Email, Password }, {
        headers: {
          'Content-Type': 'application/json'
        }


      });

      const { token, user } = response.data

      if (user) {
        Cookies.set("username", user.UserName);
        Cookies.set("Token", token)
        alert("Signed up successfully")
        navigate("/Mainpg");
      } else {
        alert("Invalid email or password");
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  const toGoogle = async () => {
    window.location.href = "http://localhost:3000/auth/google/"
    // await axios.post("http://localhost:3000/auth/google/")
  }


  return (
    <>


      <div className="bg-cover h-screen flex justify-center items-center " style={{ backgroundImage: `url(${bg})` }}>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className=' h-[30rem] w-[25rem]  bg-white rounded-md '>

            <h2 className=' text-4xl text-black ml-32  font-semibold'>Sign Up</h2><br />

            <input type="text" className='block w-80 border border-gray-300  rounded-md ml-6 py-2 px-3 ' placeholder='Name' {...register('UserName', { required: "Username is required", minLength: { value: 4, message: "Username must be more than 4 characters" }, maxLength: { value: 15, message: "Username must be less than 15 characters" } })} />
            <p className='text-black ml-32  mb-5'>{errors.UserName?.message}</p>
            <input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3  ' placeholder='Email'  {...register('Email', { required: "E-mail is required", pattern: { value: /^\S+@\S+$/i, message: "This is not a valid email" } })} />
            <p className='text-black ml-32 mb-5 '>{errors.Email?.message}</p>
            <input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 ' placeholder='Password' {...register('Password', { required: "Password is required", minLength: { value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 10, message: "Password must be less than 10 characters" } })} />
            <p className='text-black ml-32  mb-5'>{errors.Password?.message}</p>


            <button className='  bg-yellow-400 w-32 py-2 px-4 text-white rounded-md ml-32 hover:bg-black' type='Submit'>Submit</button>


            <div className='flex justify-center mt-3'>
              <hr className="border-[1.5px] w-3/6 h- bg-grey my-3 mr-3" />
              <h3>or</h3>
              <hr className="border-[1.5px] w-3/6 bg-grey my-3 ml-3" />
            </div>

            <button onClick={toGoogle}>Google</button>
          </div>
        </form>
      </div>


    </>
  )
}

export default SignUp