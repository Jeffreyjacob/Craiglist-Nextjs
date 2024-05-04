import { GetOrderByUser } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';

type Props = {
    item: GetOrderByUser
}


const ItemPurchased = ({ item }: Props) => {
    return (
        <div key={item._id}>
            <Link href={`/post/${item.post._id}`}>
                <div className='flex flex-row justify-between w-full lg:w-[600px] overflow-hidden rounded-xl
         bg-white shadow-md transition-all my-4 px-5 py-5 gap-5'>
                    <div className='flex items-center gap-5'>
                        <Image src={item.post.imageUrl} alt='order-image'
                            width={80} height={80} className='object-contain rounded-md' />
                        <div className='flex-col justify-center items-center'>
                            <h4 className='text-[15px] font-semibold line-clamp-1'>{item.post.title}</h4>
                            <p className='text-[13px] font-normal'>${item.totalAmount}</p>
                        </div>
                    </div>
                    <p className='text-[10px] text-grey-200'>{moment(item.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemPurchased