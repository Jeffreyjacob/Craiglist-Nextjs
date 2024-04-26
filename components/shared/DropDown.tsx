"use client"

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    className:string,
    selectValue:string,
    value?:string,
    onChangeHandler:()=>void
}

const DropDown = ({className,selectValue,value,onChangeHandler}:Props) => {
    const [selectCategory, setSelectCategory] = useState('');
    
    return (
        <Select value={value} onValueChange={onChangeHandler}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={selectValue} />
            </SelectTrigger>
            <SelectContent className='border-none '>
                <SelectItem value="forsale">For Sale</SelectItem>
                <SelectItem value="job">Job</SelectItem>
                <SelectItem value="housing">Housing</SelectItem>
                <SelectItem value='services'>Services</SelectItem>
                <SelectItem value='community'>Community</SelectItem>
                <SelectItem value='gigs'>Gigs</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default DropDown