'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Search } from 'lucide-react';
import { DateRangePicker } from '@/components/date-range-picker';
import { useStore } from '@/store/useStore';
import { BookingForm } from '../booking-form';



const Navbar = () => {
  const setLocation = useStore((state)=> state.setLocation);
  
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className={
    'conatiner mx-auto flex items-center border-b-2 px-6 py-2 h-24 bg-transparent'
    } 
    >
     
     <h1 className='font-bold p-2'><Link href={'/'}>Book Me</Link></h1>
    <BookingForm />

     <div className='hidden sm:block'>
        <Button className='m-2'><Link href='admin'>Sign up</Link></Button>
        <span> </span>
        <Button className='m-2'><Link href='admin'>Log in</Link></Button>
     </div>
    </div>
  )
}

export default Navbar 