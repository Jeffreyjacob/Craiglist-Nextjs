import React, { useState } from 'react'
import DropDown from './DropDown';
import { Button } from '../ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from "@/components/ui/input"


const SearchBar = ({className}:{className:string}) => {
    return (
        <div className={className}>
            <DropDown />
            <Input type='text' placeholder='Search here' className='input-field' />
            <Button className='bg-[#fffff] h-fit shadow-none text-grey-50 hover:bg-[#F5F5F5]'>
                <MagnifyingGlassIcon className='w-[24px] h-[24px]' />
            </Button>
        </div>
    )
}

export default SearchBar