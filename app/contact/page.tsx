"use client"

import React from 'react'
import Navbar from '@/components/navbar/nav'
import Footer from '@/components/footer/footer'
import { InputForm } from '@/components/contact-form/contact-form'

function contact() {
  return (
    <main>
        <Navbar />
        <div className='container mt-20 mx-200 w-200'>
          <h1 className='text-4xl font-bold mb-10'>Let's get in touch</h1>
          <InputForm />
        </div>
        <Footer /> 
       
    </main>
    
  )
}

export default contact