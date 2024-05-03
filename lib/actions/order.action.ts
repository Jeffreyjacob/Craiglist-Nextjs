"use server"

import { CheckoutOrderParams, CreateOrderParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database";
import { redirect } from "next/navigation";
import Order from "../database/models/order.modal";
import Post from "../database/models/post.modal";
import Stripe from 'stripe';

export const checkoutOrder =async (order:CheckoutOrderParams) =>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const price = Number(order.price) * 100;
    try{
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
           price_data:{
             currency:'usd',
             unit_amount:price,
             product_data:{
                name:order.postTitle
             }
           },
           quantity:1
          },
        ],
        metadata:{
            eventId:order.postId,
            buyerId:order.buyerId
        },
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      });
      redirect(session.url!)
    }catch(error){
     throw error;
    }
}

export const createOrder = async (order:CreateOrderParams)=>{
    try{
      await connectToDatabase()
      const newOrder = await Order.create({
        ...order,
        post:order.postId,
        buyer:order.buyerId
      })
      const changeItemNotAvailable = await Post.findByIdAndUpdate(
        order.postId,
        {isAvaliable:false},
        {new:true}
      )
      return JSON.parse(JSON.stringify(newOrder))
    }catch(error){
     handleError(error)
    }
}