'use client'
// add zustand string state 
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Search } from 'lucide-react';
import { DatePicker } from './calendarInput';
import { useStore } from '@/store/useStore';


const Navbar = () => {
  const setLocation = useStore((state)=> state.setLocation);
  
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className={
    'conatiner mx-auto flex items-center border-b-2 px-6 py-2 h-24'
    } 
    >
     
     <h1 className='font-bold p-2'><Link href={'/'}>Book Me</Link></h1>
     <div className='grow'>
       <div className='hidden sm:flex items-center justify-center gap-2 md:gap-8'>
        <ul className='flex gap-6'>
          <li className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Where</Label>
          <Input type="text" id="location" placeholder="Type your destination" onChange={handleLocationChange}/></li>

          <li className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Check in</Label>
          <DatePicker /></li>

          <li className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Check out</Label>
            <DatePicker />
          </li>

          <li className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Who</Label>
          <Input type="number" id="residents" name='residents' min='1' max='10'/></li>
          <li className='grid max-w-sm items-center gap-1.5 relative -bottom-2'><Button className=''><Search /></Button></li>
          
        </ul>
       </div>
     </div>
      <div className='flex grow items-center justify-end sm:hidden'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text" className='justify-center'>Search now</Label>
          {/* docelowo przycisk, który otwiera podobne menu z pełną wyszukiwarką co u góry */}
          <Input type="text" id="text" placeholder="Type your destination"/></div>
      </div>

     <div className='hidden sm:block'>
        <Button className='m-2'><Link href='admin'>Sign up</Link></Button>
        <span> </span>
        <Button className='m-2'><Link href='admin'>Log in</Link></Button>
     </div>
    </div>
  )
}

export default Navbar 