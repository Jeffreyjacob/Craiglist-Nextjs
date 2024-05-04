import ItemPurchased from '@/components/shared/ItemPurchased';
import PostCard from '@/components/shared/PostCard';
import ProfileItemCard from '@/components/shared/ProfileItemCard';
import { getOrderByUser } from '@/lib/actions/order.action';
import { getPostByUser, getPostbyId } from '@/lib/actions/post.action';
import { CreateOrderParams, GetOrderByUser, Post } from '@/types';
import { auth } from '@clerk/nextjs'
import React from 'react'

const page = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string
  const userOrder = await getOrderByUser(userId);
  const UserItem = await getPostByUser(userId)
  return (
    <div className='wrapper'>
      <h2 className='text-[19px] font-semibold mb-10'>Items Purchased</h2>
      {
        userOrder.length === 0 ? (
          <div className='flex  items-center mb-10'>
            <div className='flex w-full md:w-[600px] bg-grey-50 justify-center items-center h-[140px] md:h-[200px] rounded-lg'>
              <p className='text-center font-semibold items-center'>No Item Purchased yet</p>
            </div>
          </div>
        ) : (
          <div className='mb-10'>
            {
              userOrder.map((item: GetOrderByUser) => (
                <ItemPurchased item={item} />
              ))
            }
          </div>
        )
      }
      <h2 className='text-[19px] font-semibold mb-10'>My Posts</h2>
      <div className='mb-10'>
        {
          UserItem.length === 0 ? (
            <div className='flex  items-center mb-10'>
              <div className='flex w-full md:w-[600px] bg-grey-50 justify-center items-center h-[140px] md:h-[200px] rounded-lg'>
                <p className='text-center font-semibold items-center'>No Post</p>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                UserItem.map((item:Post)=>(
                  <div className='mx-5 my-4'>
                  <PostCard post={item}/>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default page