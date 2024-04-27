import { AboutLink, HelpLink } from '@/constants'
import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image';
import AppleLogo from '@/public/assets/images/apple-app-store-badge 1.png';
import GoogleLogo from '@/public/assets/images/Google_Play_Store_badge_EN 1.png';

const Footer = () => {
  return (
    <div className=' bg-[#F5F5F5] w-full'>

    <div className='wrapper flex flex-col md:flex-row border-b-2 border-[#E6E6E6]'>
      
    <div className='flex flex-row py-5 gap-20 max-md:mb-5 justify-center md:justify-start'>
        <div>
            <h3 className='text-[11px] text-grey-200 font-bold'>About</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-2'>
                {
                AboutLink.map((link,map)=>(
                 <li key={map} className='text-[13px] text-grey-600 font-normal md:mr-3'>
                   {link.name}
                 </li>
                ))
                }
            </ul>
        </div>
        <div>
        <h3 className='text-[11px] text-grey-200 font-bold'>Help</h3>
            <ul className='grid grid-cols-1 md:grid-cols-3 mt-5 gap-2'>
                {
                HelpLink.map((link,map)=>(
                 <li key={map} className='text-[13px] text-grey-600 font-normal md:mr-3'>
                   {link.name}
                 </li>
                ))
                }
            </ul>
        </div>
     </div>
     <div className='flex flex-row justify-center items-center'>
           <Image src={AppleLogo}
            alt='apple-logo' width={140} height={50}/>
            <Image src={GoogleLogo}
            alt='apple-logo' width={140} height={50}/>
        </div>


    </div>
     
    
      <h3 className='text-[13px] text-grey-600 font-bold my-4 text-center'>© 2021 Craigslist</h3>
    </div>
  )
}

export default Footer