"use server"

import { CreatePostParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.modal";
import Post from "../database/models/post.modal";
import { handleError } from "../utils";


export const createPost = async ({post,userId,path}:CreatePostParams)=>{   
    try{
        await connectToDatabase();
        const userCreating = await User.findById(userId);
         console.log(userCreating)
        if(!userCreating){
         throw new Error('Organizer not found');
        }
 
        const newPost = await Post.create({
         ...post,
          userCreating:userId
        })
        return JSON.parse(JSON.stringify(newPost));
      }catch(error){
         handleError(error)
         throw error
        
      }
}