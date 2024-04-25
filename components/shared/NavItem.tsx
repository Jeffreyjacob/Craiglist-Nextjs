"use client"

import { HeaderLink } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavItem = () => {
    const pathname = usePathname();
  return (
    <ul className='flex flex-col md:flex-row justify-start md:justify-center gap-4 md:gap-9'>
       {
        HeaderLink.map((link,index)=>{
            const isActive = pathname === link.route
             return (
            <li key={index} className={`${isActive && 'text-primary-400'} 
            text-[16px] font-[600] font-custom text-grey-400`}>
                <Link href={link.route}>
                   {link.label}
                </Link>
            </li>
             )
})
       }
    </ul>
  )
}

export default NavItem