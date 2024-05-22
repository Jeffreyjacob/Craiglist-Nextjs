import Image from 'next/image'
import React from 'react';
import logo from '@/public/assets/images/Logo.png'
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import SearchBar from './SearchBar';
import NavItem from './NavItem';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <div className=' shadow-md flex justify-center'>
        <div className='max-w-6xl lg:px-auto p-5 md:px-10 xl:px-0 w-full flex-between'>
      <Link href={'/'}>
        <Image src={logo}
          alt='logo'
          width={130}
          height={30} />
      </Link>
      <SignedIn>
        <div className='hidden md:flex'>
          <NavItem />
        </div>
        <div className='flex-center gap-7 '>
          <Button className='button hover:bg-primary-200 hidden md:flex'>
            <Link href={'/post/create'}>
            Create Post
            </Link>
          </Button>
          <UserButton afterSignOutUrl='/' />
          <MobileNav />
        </div>
      </SignedIn>
      <SignedOut>
        <div className='flex flex-row gap-6 items-center'>
          <Button className='button w-[120px] hover:bg-primary-200'>
            <Link href='/sign-in'>
              Login
            </Link>
          </Button>
        </div>
      </SignedOut>

    </div>
    </div> 
  )
}

export default Navbar