"use client"

import React from 'react'
import Navbar from '@/components/navbar/nav'
import Footer from '@/components/footer/footer'


function contact() {
  return (
    <main>
        <Navbar />
    <div className="relative bg-cover bg-center bg-no-repeat width-max h-220 mx-auto py-16 px-14 sm:px-6 lg:px-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
            <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,60,3.0)] md:text-5xl lg:text-8xl text-center leading-snug text-white">About us</h1>
        </div>
        <div className='container mt-20 mx-200 w-200 border-2 border-black rounded-lg p-10 bg-[rgba(255,186,8,0.2)]'>
            <h2 className='text-black text-2xl font-serif'>
                We are a team of travel enthusiasts who are passionate about helping you find the perfect stay.
            </h2>
            <p className='text-black text-2xl font-serif'>
            We’re a Europe-wide booking platform that makes it easy to find and reserve your perfect stay—whether it’s a hotel in the city, a cozy cabin in the mountains, or anything in between. Wherever you're headed in Europe, we've got the keys to your next getaway.
            </p>
        </div>
    </div>
   
        <Footer /> 
       
    </main>
    
  )
}

export default contact