import PostForm from '@/components/shared/PostForm';
import { getPostbyId } from '@/lib/actions/post.action';
import { IPost } from '@/lib/database/models/post.modal';
import { auth } from '@clerk/nextjs';
import React from 'react';

type Props = {
    params:{
        id:string
    }
}

const page = async ({params:{id}}:Props) => {
    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string
    const Post:IPost = await getPostbyId(id); 
    console.log(userId)
  return (
    <>
    <div className='bg-grey-50 py-5 md:py-10'>
       <h3 className='wrapper text-[28px] font-bold leading-[36px] md:text-[36px] md:leading-[44px] '>
       Update Post
       </h3>
    </div>
    <div className='wrapper my-8'>
       <PostForm userId={userId} 
       type='Update' 
       post={Post}
       postId={Post._id}
       />
    </div>
    </>
  )
}

export default page