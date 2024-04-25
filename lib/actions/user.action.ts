'use server'

import { CreateUserParams, UpdateUserParams } from '@/types';
import {revalidatePath} from 'next/cache';
import { connectToDatabase } from '../database';
import User from '../database/models/user.modal';
import { handleError } from '../utils';
import Post from '../database/models/post.modal';
import Order from '../database/models/order.modal';


export const createUser = async (user:CreateUserParams)=>{
   try{
      await connectToDatabase();
      const newUser = await User.create(user);

      return JSON.parse(JSON.stringify(newUser));
   }catch(error){
      handleError(error)
   }
}

export async function updateUser(clerkId:string,user:UpdateUserParams) {
    try{
      await connectToDatabase()
      const updatedUser = await User.findOneAndUpdate({clerkId},user,{new:true})
      if(!updatedUser) throw new Error('User  update failed')
     return JSON.parse(JSON.stringify(updatedUser))
    }catch(error){
         handleError(error)
    }
}

export async function deleteUser(clerkId:string){
    try{
      await connectToDatabase()
      //Find user to delete
      const userToDelete = await User.findOne({clerkId})
      
      if(!userToDelete){
        throw new Error ('User not Found')
      }

      //Unlink relationships
    await Promise.all([
        //update the posts collections to remove references to the user
        Post.updateMany(
         {_id:{$in:userToDelete}},
         {$pull:{user:userToDelete._id}}
        ),

        //update the 'orders' collect to remove references to the user
        Order.updateMany({_id:{$in:userToDelete.orders}},{$unset:{buyer:1}}),
    ])
       //Delete user
       const deletedUser = await User.findByIdAndDelete(userToDelete._id)
       revalidatePath('/')

       return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    }catch(error){
        handleError(error)
    }
}