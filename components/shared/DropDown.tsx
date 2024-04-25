"use client"

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const DropDown = () => {
    const [selectCategory, setSelectCategory] = useState('');

    return (
        <Select value={selectCategory} onValueChange={setSelectCategory}>
            <SelectTrigger className="select-field w-fit gap-3 text-[11px] md:text-[14px]  text-grey-400 font-[600]">
                <SelectValue placeholder="For Sale" />
            </SelectTrigger>
            <SelectContent className='border-none '>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default DropDown