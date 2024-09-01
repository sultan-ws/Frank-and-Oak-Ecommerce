import React from 'react'
import { CategorySidebar } from '../category/Category'

export default function FilterModal() {
  return (
    <div className='bg-[rgba(0,0,0,0.5)] w-full h-screen'>
    <div className='w-[50vw]'>
        <CategorySidebar/>
    </div>
    </div>
  )
}
