"use client"

import React from 'react';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { HeartIcon } from '@heroicons/react/24/outline';
import { AddFavoriteList, RemoveFromFavorite } from '@/lib/actions/favorite.action';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';


type Props = {
    title: string,
    price: string
    imageUrl: string
    userId: string
    location: string,
    isAvaliable: boolean,
    postId: string
}

const AddtoFavoriteButton = async ({ title, price, imageUrl, userId, location,
    isAvaliable, postId }: Props) => {
const router = useRouter()
    async function AddToFavorite() {
        await AddFavoriteList(
            {
                postId,
                userId,
                title,
                price,
                imageUrl,
                location
            }
        )
        router.refresh()
    }

    async function RemovefromFavoriteHandle(){
      const removeItem =  await RemoveFromFavorite({
        postId,
        userId
       })
       router.refresh()
       console.log(removeItem)
    }

    return (
        <>
            {
                isAvaliable ? (
                    <button >
                    <HeartFilledIcon className='w-[22px] h-[22px] text-grey-200 transition duration-300 transform hover:scale-110' />
                    </button>
                ) :
                    (
                        <button>
                            <HeartIcon className='w-[22px] h-[22px] text-grey-200 transition duration-300 transform hover:scale-110' />
                        </button>
                    )
            }
        </>
    )
}

export default AddtoFavoriteButton