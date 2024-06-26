import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { imageDb } from './capstoneimgConfig'; // Make sure the path is correct
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function Add() {
  const [Spot, setSpot] = useState("");
  const [Location, setLocation] = useState("");
  const [Image, setImage] = useState(null);
  const [ImageUrl, setImageUrl] = useState("");
  const [Description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleImageUpload = () => {
    if (Image === null) return;
    const imgRef = ref(imageDb, `files/${uuidv4()}`);
    uploadBytes(imgRef, Image).then(() => {
      getDownloadURL(imgRef).then((url) => {
        setImageUrl(url);
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const UserName = Cookies.get('username');
    axios.post("http://localhost:3000/post", { UserName, Spot, Location, Image: ImageUrl, Description })
      .then(result => {
        console.log(result);
        navigate('/Mainpg');
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (Image) {
      handleImageUpload();
    }
  }, [Image]);

  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='w-[30rem] h-[35rem] border pt-3 mt-5 border-orange-800 rounded-md'>
          <h3 className='text-6xl pl-[10rem] mb-7'>Create</h3>
          <input type="text" name="Spot" className='border border-orange-800 mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Spot:' onChange={(e) => setSpot(e.target.value)} /><br />
          <input type="text" name="Location" className='border border-orange-800 mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Location:' onChange={(e) => setLocation(e.target.value)} /><br />
          <input type="text" name="Description" className='border border-orange-800 mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Description:' onChange={(e) => setDescription(e.target.value)} /><br />
          <input type="file" name="Image" className='mb-5 w-[25rem] h-[2.5rem] ml-9' placeholder='Image' onChange={(e) => setImage(e.target.files[0])} /><br />

          <br />
          <button type='button' onClick={() => navigate('/Mainpg')} className='rounded-lg w-[8rem] h-[2.5rem] text-gray-700 border border-gray-700 text-xl ml-10'>Cancel</button>
          <button className='rounded-lg w-[8rem] h-[2.5rem] bg-yellow-400 ml-10 text-white text-xl' type='submit'>Create</button>
        </form>
      </div>
    </>
  );
}

export default Add;
