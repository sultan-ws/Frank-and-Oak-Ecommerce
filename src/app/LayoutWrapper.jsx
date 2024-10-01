"use client"
import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {

  let [removeCommons,setRemoveCommons]=useState(false)
  const route=usePathname()
  let ifCommon = (route !== '/checkouts')

  return (
    <main>
      {ifCommon && <Header/>}

      {children}

      {ifCommon && <Footer/>}
    </main>
  );
}