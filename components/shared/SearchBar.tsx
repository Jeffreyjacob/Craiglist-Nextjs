"use client"
import React, { useState } from 'react'
import DropDown from './DropDown';
import { Button } from '../ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from "@/components/ui/input"


const SearchBar = ({className}:{className:string}) => {
    const [selectcategory,setSelectCategory] = useState('')
    return (
        <div className={className}>
            <DropDown className='select-field w-fit gap-3 text-[11px] md:text-[14px]  text-grey-400 font-[600]' selectValue='For sale'
            value={selectcategory} onChangeHandler={()=>setSelectCategory}/>
            <Input type='text' placeholder='Search here' className='input-field' />
            <Button className='bg-[#fffff] h-fit shadow-none text-[#000000] hover:bg-[#F5F5F5]'>
                <MagnifyingGlassIcon className='w-[24px] h-[24px]' />
            </Button>
        </div>
    )
}

export default SearchBar