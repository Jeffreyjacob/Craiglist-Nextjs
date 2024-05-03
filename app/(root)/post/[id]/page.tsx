import { getPostbyId, getRelatedPostbyCategory } from '@/lib/actions/post.action'
import { Post, SearchParamProps } from '@/types'
import Image from 'next/image';
import React from 'react'
import moment from 'moment';
import { Button } from '@/components/ui/button';
import PostRow from '@/components/shared/PostRow';
import { IPost } from '@/lib/database/models/post.modal';
import PostCard from '@/components/shared/PostCard';

const page = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const post: Post = await getPostbyId(id);
  const relatedItem = await getRelatedPostbyCategory({
    category: post.ItemCategory,
    postId: post._id,
  })
  console.log(relatedItem)
  return (
    <div className='wrapper justify-center items-center'>
      <div className='text-[14px] font-medium text-[#686767] flex flex-row '>
        <p>Home {' > '}</p>
        <span className='text-[#000000] ml-2'>{post.title}</span>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-col lg:flex-row my-7 mx-4 gap-7'>
          <Image src={post.imageUrl} alt='post-image'
            width={470} height={390} className='rounded-[10px]' />
          <div className='flex flex-col'>
            <h3 className='text-[22px] font-normal text-[#555555] mb-4'>
              {post?.title}
            </h3>

            {/**price and date posted*/}
            <div className='flex flex-row gap-2 items-center'>
              <h4 className='text-[22px] font-semibold'>
                $ {post.price}
              </h4>

              <div className='flex flex-row gap-2 text-[13px] text-[#AAAAAA] font-normal'>
                <p>Posted {moment(post.createdAt).fromNow()}</p>
              </div>
            </div>

            {/**Overview  */}
            <div className='flex flex-col mt-3 gap-1'>
              <h3 className='text-[#555555] text-[18px] font-semibold'>Overview</h3>
              <p className='text-[14px] text-[#888888] font-normal'>
                Condition: <span className='text-black'>{post.ItemCondition}</span>
              </p>
              <p className='text-[14px] text-[#888888] font-normal'>
                Location: <span className='text-black'>{post.location}</span>
              </p>
              <p className='text-[14px] text-[#888888] font-normal'>
                Description: <span className='text-black'>
                  {post.description}
                </span>
              </p>
            </div>
            {/**Buy Item button */}
            <Button className='w-[100px] my-4 text-[17px] py-5 bg-primary-400 hover:bg-primary-50 rounded-full'>
              Buy
            </Button>
            {/**User Profile */}
            <div className='flex flex-row gap-4 items-center mt-4'>
              <Image src={post.userCreating.photo} alt='user-profile'
                width={40} height={40} className='rounded-full' />
              <p className='text-[14px] font-semibold text-primary-400'>
                {post.userCreating.firstName}{' '} {post.userCreating.lastName}
              </p>
            </div>
          </div>

        </div>



      </div>
      {/**Related Items */}
      <div className='w-full md:mb-9 mb-7'>
        <h3 className='text-[19px] font-semibold mt-7'>Related Items</h3>
         <div className='flex flex-col md:flex-row max-md:mx-4 max-md:justify-center mt-6'>
            {
              relatedItem?.data.map((post:Post,index:any)=>(
                <div key={post._id} className='mx-4'>
                  <PostCard post={post}/>
                </div>
              ))
            }
         </div>
      </div>

    </div>
  )
}

export default page