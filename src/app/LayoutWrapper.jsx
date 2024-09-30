"use client"
import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import TextSlider from "./common/TextSlider";

export default function LayoutWrapper({ children }) {

  let [removeCommons,setRemoveCommons]=useState(false)
  const router=usePathname()
  console.log(router)
  useEffect(()=>{
    if(router=="/checkouts"){
      setRemoveCommons(true)
    }
    else{
      setRemoveCommons(false)
    }
  },[router])

  return (
    <main>
      <Header/>
      {/* {removeCommons ? <Header /> : "" } */}
      {children}
      {/* {removeCommons ? <Footer /> : ""} */}
      <Footer/>
    </main>
  );
}