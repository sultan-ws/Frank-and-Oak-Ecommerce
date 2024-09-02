"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsBagPlus } from "react-icons/bs";
import Login from '../modals/Login';
export default function Header() {
  let [loginStatus,setLoginStatus]=useState(false)
  return (
    <header className='fixed top-0 z-[999999] w-full shadow-md py-2 lg:py-1 px-2 sm:px-4 md:px-10 bg-white flex justify-between'>
      <div className='  flex gap-2 sm:gap-4 items-center  basis-[70%] md:basis-[20%] lg:basis-[15%]'>
      <RxHamburgerMenu className='sm:hidden block w-[22px] h-7' />
      <span className='font-bold md:text-[18px] text-[15px]'>Frank And Oak</span>
      </div>
      <nav className=' basis-[30%] lg:basis-[84%] md:basis-[75%]  flex items-center justify-end lg:justify-between'>
        <div className='lg:block  hidden'>
          <ul className='flex gap-6 text-[15px] font-medium'>
            <li className='hover:bg-[#F9F9F9] hover:underline underline-offset-4 px-3 duration-500 p-2'>This Just In</li>
            <li className='hover:bg-[#F9F9F9] hover:underline underline-offset-4 px-3 duration-500 p-2'>Women</li>
            <li className='hover:bg-[#F9F9F9] hover:underline underline-offset-4 px-3 duration-500 p-2'>Men</li>
            <li className='hover:bg-[#F9F9F9] hover:underline underline-offset-4 px-3 duration-500 p-2'>Our Story</li>
          </ul>
        </div>
        <ul className='flex gap-3 sm:gap-5'>
          <li>
          <CiSearch className='sm:w-7 sm:h-7 h-5 w-5'  />
          </li>
          <li className='cursor-pointer' onClick={()=>setLoginStatus(!loginStatus)}>
          <FaRegUserCircle className='sm:w-[22px]  sm:h-7 h-5 w-[18px] ' />
            <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
          </li>
          <li>
          <FaRegHeart className='sm:w-[22px] sm:h-7 h-5 w-[18px]' />
          </li>
          <li>
          <BsBagPlus className='sm:w-[22px] sm:h-7 h-5 w-[18px]' />
          </li>
        </ul>
      </nav>
    </header>
  )
}


