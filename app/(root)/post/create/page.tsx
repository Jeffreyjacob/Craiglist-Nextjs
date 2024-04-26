import PostForm from '@/components/shared/PostForm'
import { auth } from '@clerk/nextjs';
import React from 'react'

const Page = () => {
  const {sessionClaims}  = auth();
  const UserId = sessionClaims?.userId as string;
  console.log(UserId,"userId")
  return (
    <>
    <div className='bg-grey-50 py-5 md:py-10'>
       <h3 className='wrapper text-[28px] font-bold leading-[36px] md:text-[36px] md:leading-[44px] '>
       Create Post
       </h3>
    </div>
    <div className='wrapper my-8'>
       <PostForm userId={UserId} type='Create'/>
    </div>
    </>
  )
}

export default Page