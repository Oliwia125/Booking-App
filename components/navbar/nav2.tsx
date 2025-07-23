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



const headerNavbar = () => {
  const setLocation = useStore((state)=> state.setLocation);
  
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className={
    'conatiner mx-auto flex items-center bg-transparent px-6 py-2 h-24  text-white'
    } 
    >
     
        <BookingForm />
       
    </div>
  )
}

export default headerNavbar 