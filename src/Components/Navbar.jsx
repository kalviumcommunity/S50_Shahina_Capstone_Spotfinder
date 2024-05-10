import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import website from '../assets/website.png';
import trend from '../assets/trend.png';
import pin from '../assets/pin.png';
function Navbar() {
    return (
        <>
            <div className='' >
                <div className=' bg-[#FFBC0E] h-lvh text-white w-64' >
                    <nav>
                        <div className='logo pt-8 flex justify-center  items-center'>
                            <img className='w-9' src={logo} alt="" />
                            <h1 className=' text-3xl pl-2  font-josefin'>Spotfinder</h1>
                        </div>
                        <ul className='mt-36 '>
                            <Link to='/Mainpg'>
                            <li className='cursor-pointer  flex justify-center items-center ht  text-2xl font-josefin'> <img className="h-10 " src={website} alt="" /><h3 className="ml-3">Portal</h3></li>
                            </Link>
                            <li className='cursor-pointer  mt-14 flex justify-center items-center text-2xl   font-josefin'><img className="h-10 " src={trend} alt="" /><h3 className="ml-3">Top-Teir</h3></li>
                            <li className='cursor-pointer  mt-14 flex justify-center items-center text-2xl  font-josefin'><img className="h-10 " src={pin} alt="" /><h3 className="ml-3">Map</h3></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar