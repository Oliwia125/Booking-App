'use client'

import React from "react"
import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
    return (
<header>
    <div className="bg-cover bg-center bg-no-repeat max-width mx-auto py-16 px-14 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/resort-photo.png')"}}>
        <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,60,3.0)] md:text-5xl lg:text-8xl text-center leading-snug text-gray-100">Find your perfect stay</h1>
        <div className="max-w-xl mx-auto">
        <p className="mt-10 text-white text-center text-xl drop-shadow-md lg:text-3xl">
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