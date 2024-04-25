import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Bars3Icon } from '@heroicons/react/24/solid'
import NavItem from './NavItem'
import Image from 'next/image'
import logo from '@/public/assets/images/Logo.png'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'


const MobileNav = () => {
    return (
        <div className='md:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Bars3Icon className='text-grey-400 w-[24px] h-[24px]' />
                </SheetTrigger>
                <SheetContent>
                    <Image src={logo}
                        alt='logo'
                        width={130}
                        height={30} />

                    <Separator className="border-gray-50 my-4" />
                    <NavItem />
                    <Button className='button hover:bg-primary-200 mt-7'>
                        Create Post
                    </Button>
                </SheetContent>
            </Sheet>

        </div >
    )
}

export default MobileNav