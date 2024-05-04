import { Post } from '@/types';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    Item: Post
}

const ProfileItemCard = ({ Item }: Props) => {
    return (
        <div key={Item._id} className='w-full md:w-[600px] overflow-hidden rounded-xl
    bg-white shadow-md transition-all my-4 px-5 py-5 gap-5'>
            <Link href={`/post/${Item._id}`}>
                <div className='flex flex-row justify-between '>
                    <div className='flex items-center gap-5'>
                        <Image src={Item.imageUrl} alt='order-image'
                            width={80} height={80} className='object-contain rounded-md' />
                        <div className='flex-col justify-center items-center'>
                            <h4 className='text-[15px] font-semibold line-clamp-1 w-[310px]'>{Item.title}</h4>
                            <p className='text-[13px] font-normal'>${Item.price}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[10px] text-grey-200'>{moment(Item.createdAt).format('MMMM Do YYYY, h:mm a')}</p>

                        {
                            Item.isAvaliable ? (
                                <h2 className='text-[18px] font-semibold mt-3 text-grey-200'>
                                   Available
                                </h2>
                            ): (
                                <h2 className = 'text-[18px] font-semibold text-green-400 mt-3'>
                                   Sold
                                  </h2>
                    )
                    }
                </div>
        </div>
            </Link >
        </div >
    )
}

export default ProfileItemCard