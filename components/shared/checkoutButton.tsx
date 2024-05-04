"use client"

import React from 'react';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Post } from '@/types';
import Checkout from './checkout';

type Props = {
    post: Post
}

const CheckoutButton =async  ({ post }: Props) => {
    const {user} = useUser();
    const userId = user?.publicMetadata.userId as string;
 
    return (
        <div>
            {
                post.isAvaliable ? (
                    <>
                        <SignedOut>
                        <Button className='w-[100px] my-4 text-[17px] py-5 bg-primary-400 hover:bg-primary-50 rounded-full'>
                            <Link href='/sign-in'>
                              Buy
                            </Link>
                        </Button>
                        </SignedOut>
                        <SignedIn>
                         <Checkout post={post} userId={userId}/>
                        </SignedIn>
                    </>
                ) : (
                    <h2 className='text-[18px] font-semibold text-green-400 mt-3'>
                        SOLD
                    </h2>
                )
            }
        </div>
    )
}

export default CheckoutButton