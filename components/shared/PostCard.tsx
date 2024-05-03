
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { IPost } from '@/lib/database/models/post.modal';
import Image from 'next/image';
import { HeartIcon } from '@radix-ui/react-icons';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { EllipsisHorizontalCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { auth } from '@clerk/nextjs';
import DeleteConfirmation from './DeleteConfirmation';
import { Post } from '@/types';
import AddtoFavoriteButton from './AddtoFavoriteButton';



type Props = {
    post: Post
}

const PostCard = ({ post }: Props) => {
    const { sessionClaims } = auth();
    const userID = sessionClaims?.userId as string;
    const isCurrentUser = userID === post?.userCreating?._id.toString();
    console.log(post)
 
    return (
        <div className='flex flex-col overflow-hidden rounded-xl
         bg-white shadow-md transition-all h-[300px] md:h-[340px] max-w-[400px]'>
            <Link href={`/post/${post._id}`} 
            style={{backgroundImage:`url(${post.imageUrl})`}}
            className='flex-center flex-grow bg-grey-50 bg-cover bg-center text-grey-500'>
            </Link>
            <div className='mx-4 my-2 flex flex-col justify-between md:gap-3 '>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-[18px] font-semibold'>$ {post.price}</p>
                    <div className='flex flex-row gap-2'>
                       <AddtoFavoriteButton price={post.price}
                        title={post.title} 
                        userId={userID}
                        location={post.location}
                        imageUrl={post.imageUrl}
                        isAvaliable={post.isAvaliable}
                        postId={post._id}/>
                        {
                            isCurrentUser && (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <EllipsisHorizontalCircleIcon className='w-[22px] h-[22px] text-grey-200' />
                                    </PopoverTrigger>
                                    <PopoverContent className='w-[50px] items-center justify-center'>
                                            <Link href={`/post/${post._id}/update`}>
                                                <PencilSquareIcon className='w-[22px] h-[22px] mb-2 text-blue-600' />
                                            </Link>
                                            <DeleteConfirmation/>
                                    </PopoverContent>
                                </Popover>
                            )
                        }
                    </div>
                </div>
                <p className='text-[14px] font-normal leading-tight line-clamp-1 text-wrap w-[250px]'>{post.title}</p>
                <p className='text-[12px] font-normal text-[#AAAAAA] '>{post.location}</p>
            </div>
        </div>
    )
}

export default PostCard