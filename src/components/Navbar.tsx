import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <div className='relative'>
          <Link href={'/'} className='text-xl font-bold uppercase text-primary-500'>
            Logo
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <button className='h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-50 hover:bg-primary-500  hover:text-white active:border-primary-100 active:bg-primary-200'>Log In</button>

          <button className='h-10 rounded-md bg-primary-200 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-500 active:bg-primary-200'>Sign Up</button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;