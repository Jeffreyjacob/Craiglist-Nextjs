"use server"

import { CreatePostParams, GetAllPostParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.modal";
import Post from "../database/models/post.modal";
import { handleError } from "../utils";


const populatePost = async (query:any)=>{
  return query
  .populate({path:'userCreating',model:User,select:'_id firstName lastName'})
}

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

export const getAllPosts = async ({query,limit=10,page,category}:GetAllPostParams)=>{
     try{
       
      await connectToDatabase();

      const conditions = {};
      const postQuery = Post.find(conditions)
      .sort({createdAt:'desc'})
      .skip(0)
      .limit(limit)

      const posts = await populatePost(postQuery);
      const postsCount = await Post.countDocuments(conditions);

      return {
       data:JSON.parse(JSON.stringify(posts)),
       totalPages:Math.ceil(postsCount/limit)
      }

     }catch(error){
        handleError(error);
     }
}