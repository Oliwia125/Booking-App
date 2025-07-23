'use client'

import React from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import HeaderNavbar from "./navbar/nav2";


const Header = () => {
    return (
<header>
  
    <div className="relative bg-cover bg-center bg-no-repeat width-max h-220 mx-auto py-16 px-14 sm:px-6 lg:px-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=4608&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <div className="relative z-10"></div>
        <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,60,3.0)] md:text-5xl lg:text-8xl text-center leading-snug text-white">Find your perfect stay</h1>
        <div className="max-w-xl mx-auto">
        <p className="mt-40 mb-20 text-white text-center text-xl drop-shadow-md lg:text-3xl">
          Check out hundreds of offers and book your ideal holiday stay now
        </p>
      </div>
      <div className="relative bg-cover">
        <HeaderNavbar />
      </div>
    </div>
</header>



    )
}

export default Header