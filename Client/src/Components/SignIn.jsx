import React, { useState } from 'react';
import bg from '../assets/bg.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignIn() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            console.log(formData)
            const response = await axios.post('http://localhost:3000/user/signin', formData);
            const { user, token } = response.data;
            if (user) {
                Cookies.set("username", user.UserName);
                Cookies.set("Token",token)

                navigate("/Mainpg");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error signing in:", error);
            alert("An error occurred while signing in. Please try again later.");
        }
        setLoading(false);
    }
    

    return (
        <div className="bg-cover h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='h-[25rem] w-[25rem] bg-white rounded-md'>
                    <h2 className='text-4xl text-black mt-4 ml-32 font-semibold'>Sign In</h2><br />
                    <input type="text" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Name' {...register('UserName', { required: "Username is required" })} /><br />
                    {errors.UserName && <p className='text-black'>{errors.UserName.message}</p>}
                    <input type="password" className='block w-80 border border-gray-300 rounded-md ml-6 py-2 px-3 mb-3' placeholder='Password' {...register('Password', { required: "Password is required" })} /><br />
                    {errors.Password && <p className='text-black'>{errors.Password.message}</p>}
                    <button type="submit" className={`bg-yellow-400 w-32 py-2 px-4 text-white rounded-md ml-32 hover:bg-black ${loading ? 'cursor-not-allowed opacity-50' : ''}`} disabled={loading}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
