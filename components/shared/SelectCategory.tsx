import { SelectCategoryLists } from '@/constants'
import Image from 'next/image'
import React from 'react'

const SelectCategory = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center'>
        {
            SelectCategoryLists.map((category,index)=>(
                <div key={index} className='px-4 max-lg:py-4 relative transition duration-300 transform hover:scale-110'>
                 <Image src={category.image} alt='category-image'
                 width={190} height={170}/>
                 <p className='absolute p-[18px] bottom-0 font-normal right-4 text-white'>
                    {category.name}
                 </p>
                </div>
            ))
        }
    </div>
  )
}

export default SelectCategory