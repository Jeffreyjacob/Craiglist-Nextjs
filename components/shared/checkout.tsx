import React, { useEffect } from 'react'
import { Button } from '../ui/button';
import { Post } from '@/types';
import {loadStripe} from '@stripe/stripe-js';
import { checkoutOrder } from '@/lib/actions/order.action';

loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

type Props = {
    post:Post,
    userId:string
}

const Checkout = ({post,userId}:Props) => {
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);
    const onCheckout = async () => {
        const order = {
            postTitle:post.title,
            postId:post._id,
            price:post.price,
            buyerId:userId
          }
          await checkoutOrder(order);
    }
    return (
        <div>
            <Button className='w-[100px] my-4 text-[17px] py-5 bg-primary-400 hover:bg-primary-50 rounded-full' onClick={onCheckout}>
                Buy
            </Button>
        </div>
    )
}

export default Checkout;