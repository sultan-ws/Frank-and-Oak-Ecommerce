"use client"
import React, { useState } from 'react'
import { FaRegSquareFull } from 'react-icons/fa6';
import { SiWindows11 } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { QuickAddButton } from '../HomeComponents/ThisJustIn';

export default function Category() {
  return (
    <section className='max-w-[1460px] mx-auto grid lg:grid-cols-[15%_85%] md:grid-cols-[25%_75%] justify-between mt-[50px] py-[30px]'>
        <CategorySidebar/>
        <div className='p-4'>
            <div className='w-full border-b border-gray-300 py-6 flex items-center md:justify-end justify-between'>
                <div className='text-[14px] font-semibold flex gap-2 md:hidden '><svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg> Filters</div>
                <div className='flex gap-2 justify-end'>
            <SiWindows11 className='text-white bg-black border border-black w-6 h-6' />
            <FaRegSquareFull className='w-6 h-6 text-gray-500' />
            <div className='flex items-center text-[14px] font-semibold gap-2 ms-5'>Sort by <MdOutlineKeyboardArrowDown /></div>
                </div>
            </div>
            <div className='py-6'>
            <div className='text-[20px] font-medium'>New In</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='text-center mt-10'>
                <span className='text-[14px] font-mediumtext-[#666] block'>40 of 99</span>
                <button className='border-2 py-2.5 px-16 hover:shadow-[5px_5px_0px_0px_#666] border-black font-medium mt-2'>Load more</button>
            </div>
            </div>
        </div>
    </section>
  )
}


export function CategorySidebar() {
    let [faqStatus,setFaqStatus]=useState(false)
  return (
    <aside className="h-screen md:block hidden">
      <div className="text-[13px] font-medium">
        {" "}
        <span className="underline underline-offset-2">Home</span> /{" "}
        <span className="underline underline-offset-2">Women</span>
      </div>
      <div className="text-[20px] pt-2 font-medium">New In</div>
      <div
        id="asideScrollBar"
        className="h-[80vh] pe-2 overflow-scroll overflow-x-hidden"
      >
        <div className="py-7 divide-y divide-gray-300">
          <div className="border-t border-gray-300  ">
            <h4
              onClick={() => setFaqStatus(!faqStatus)}
              className="text-[14px] font-semibold py-4 px-2 flex items-center justify-between"
            >
              Fit & Sizing{" "}
              <span>
                {faqStatus ? (
                  <svg
                    className="w-2.5 h-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                )}
              </span>
            </h4>
            {
                faqStatus ?  <div className='space-y-2 pb-3 ps-2'>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
                <div class="flex items-center me-4">
                    <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-black"
                    />
                    <label
                        for="red-checkbox"
                        class="ms-2 text-[14px] font-semibold"
                    >
                        Red
                    </label>
                </div>
  </div>

  :''
            }
          </div>
          <div className=" ">
            <h4 className="  text-[14px] font-semibold py-4 px-2 flex items-center justify-between">
              Fit & Sizing{" "}
              <span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> */}
              </span>
            </h4>
          </div>
          <div className=" ">
            <h4 className="  text-[14px] font-semibold py-4 px-2 flex items-center justify-between">
              Fit & Sizing{" "}
              <span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> */}
              </span>
            </h4>
          </div>
          <div className=" ">
            <h4 className="  text-[14px] font-semibold py-4 px-2 flex items-center justify-between">
              Fit & Sizing{" "}
              <span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg> */}
              </span>
            </h4>
          </div>
        </div>
        <div className="border-t border-gray-300 py-6">
          <h3 className="text-[14px] font-bold">Featured</h3>
          <ul className="py-4 text-[13px] font-semibold space-y-2">
            <li>New In</li>
            <li>Best Sellers</li>
            <li>Coming Soon</li>
            <li>The Originals</li>
            <li>Workwear</li>
            <li>Sale</li>
          </ul>
          <h3 className="text-[14px] font-bold mt-5">Clothing</h3>
          <ul className="py-4 text-[13px] font-semibold space-y-2">
            <li>Shop All</li>
            <li>T-shirts & Tops</li>
            <li>Blouses & Shirts</li>
            <li>Sweaters & Cardigans</li>
            <li>Blazers & Overshirts</li>
            <li>Sale</li>
            <li>Denim</li>
            <li>Pants</li>
            <li>Dresses</li>
          </ul>
          <h3 className="text-[14px] font-bold mt-5">Accessories</h3>
          <ul className="py-4 text-[13px] font-semibold space-y-2">
            <li>Shop All</li>
            <li>T-shirts & Tops</li>
            <li>Blouses & Shirts</li>
            <li>Sweaters & Cardigans</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}


export function Card() {
    let [quickAdd,setQuickAdd]=useState(false)
  return (
    <div className='cursor-pointer group'>
                <div className=' w-full h-full'>
                    <div className='group relative'>
                    <span className='bg-black text-white absolute right-2 top-2 z-[9999] text-[8px] sm:text-[10px] font-medium uppercase px-0.5 sm:px-1 py-0.5'>few left</span>
                    <img className='h-full w-full object-cover' src="/images/buttonUpSweater.webp" alt="Womens Denim" />
                    <img className='h-full w-full duration-300 z-[999] absolute top-0 group-hover:block hidden object-cover' src="/images/buttonUpSweater2.webp" alt="Womens Denim" />
                    <button onClick={()=>setQuickAdd(true)} className={`${setQuickAdd ? <QuickAddButton/> : ""} w-[95%] text-center box-border bg-white py-3 text-[14px] font-medium absolute bottom-2 translate-x-[-50%] left-[50%]  group-hover:block hidden`}>Quick Add
                    </button>
                    </div>
                <h5 className='sm:text-[14px] text-[12px] flex gap-3 mt-2 font-semibold'>The Button-Up Sweater Vest in Space Blue
                    <span className=' rounded-full hover:bg-[#EBECEE] h-7 w-7 p-1'>
                <svg className='sm:w-5 sm:h-5 h-3 w-3 ' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3666 3.84123C16.941 3.4154 16.4356 3.07761 15.8794 2.84714C15.3232 2.61667 14.727 2.49805 14.1249 2.49805C13.5229 2.49805 12.9267 2.61667 12.3705 2.84714C11.8143 3.07761 11.3089 3.4154 10.8833 3.84123L9.99994 4.72457L9.1166 3.84123C8.25686 2.98149 7.0908 2.49849 5.87494 2.49849C4.65907 2.49849 3.49301 2.98149 2.63327 3.84123C1.77353 4.70098 1.29053 5.86704 1.29053 7.0829C1.29053 8.29876 1.77353 9.46482 2.63327 10.3246L3.5166 11.2079L9.99994 17.6912L16.4833 11.2079L17.3666 10.3246C17.7924 9.89894 18.1302 9.39358 18.3607 8.83736C18.5912 8.28115 18.7098 7.68497 18.7098 7.0829C18.7098 6.48083 18.5912 5.88465 18.3607 5.32844C18.1302 4.77222 17.7924 4.26686 17.3666 3.84123Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
                </h5>
                <div className='sm:text-[14px] text-[13px] font-medium mt-1 sm:mt-3'>$89.50</div>
                <span className='group-hover:hidden sm:text-[16px] text-[12px] block'>1 color</span>
                <div className='group-hover:block hidden mt-1'>
                <div className='sm:w-5 sm:h-5 h-3 w-3 rounded-full border border-black flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='sm:w-3.5 sm:h-3.5 h-1.5 w-1.5' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                </div>
                </div>
                </div>
            </div>
  )
}
