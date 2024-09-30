"use client"
import React from 'react'

export default function MobileSideBar({sidebarStatus}) {
  return (
    <section className={` ${sidebarStatus ? "translate-x-0" : "-translate-x-full"} duration-300 transform absolute top-0 left-0 bg-red-600 w-[90%] h-screen`}>
        <div></div>
    </section>
  )
}
