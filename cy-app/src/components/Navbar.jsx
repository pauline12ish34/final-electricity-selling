import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return(
        <nav className='flex justify-between bg-black '>
          <div className='px-4 cursor-pointer md:hidden'>
            <svg class="w-6 h-6 text-white svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </div>

        <div className='pr-8 md:block hidden pt-8 gap-16 links'>
        <Link to='/'> Home</Link>
        <Link to='/home' className='p-4 text-white'> Home</Link>
        <Link to='/buy' className='p-4 text-white'> Buy</Link>
        <Link to='/viewtransaction' className='p-4 text-white'> View</Link>

        </div>
        
        </nav>
    )
}
