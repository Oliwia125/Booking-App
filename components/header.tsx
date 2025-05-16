'use client'

import React from "react"
import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
    return (
<header>
    <div className="bg-cover bg-center bg-no-repeat max-width mx-auto py-16 px-14 sm:px-6 lg:px-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1747150318848-1e80d0876991?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,60,3.0)] md:text-5xl lg:text-8xl text-center leading-snug text-white">Find your perfect stay</h1>
        <div className="max-w-xl mx-auto">
        <p className="mt-10 text-gray-100 text-center text-xl drop-shadow-md lg:text-3xl">
          Check out hundreds of offers and book your ideal holiday stay now
        </p>
      </div>
    <div className="flex justify-center p-8">
        <Button>Book now</Button>
    </div>
    </div>
</header>



    )
}

export default Header