"use server"

import { CreatePostParams, DeletePostParams, GetAllPostParams, GetRelatedPostsByCategoryParams, UpdatePostParams } from "@/types"
import { connectToDatabase } from "../database"
import User from "../database/models/user.modal";
import Post from "../database/models/post.modal";
import { handleError } from "../utils";
import { revalidatePath } from "next/cache";
import { Types } from "mongoose";


const populatePost = async (query:any)=>{
  return query
  .populate({path:'userCreating',model:User,select:'_id firstName lastName photo'})
}



export const createPost = async ({post,userId,path}:CreatePostParams)=>{
  try{
    await connectToDatabase();
    const userCreating = await User.findById(userId)
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

export const getPostbyId = async (postId:string)=>{
   try{
     await connectToDatabase();

     const post = await populatePost(Post.findById(postId));
      if(!post){
        throw new Error ("Post not found")
      }
      return JSON.parse(JSON.stringify(post));
   }catch(error){
      handleError(error);
   }
}

export const DeletePost = async ({postId,path}:DeletePostParams)=>{
   try{
      await connectToDatabase();
      const DeletedPost = await Post.findByIdAndDelete(postId);

      if(DeletedPost) revalidatePath(path);
      return JSON.parse(JSON.stringify(DeletedPost));
   }catch(error){
    handleError(error)
   }
}

export const updatePost = async ({userId,post,path}:UpdatePostParams)=>{
   try{
    await connectToDatabase()

    const postToUpdate = await Post.findById(post._id);
    if(!postToUpdate || postToUpdate.userCreating.toHexString() !== userId ){
      throw new Error ('Unauthorized or post not found')
    }
    
    const updatedPost = await Post.findByIdAndUpdate(
      post._id,
      post,
      {new:true}
    )
    revalidatePath(path)
    return JSON.parse(JSON.stringify(updatedPost))

   }catch(error){
    handleError(error);
   }
}

{/**get related items by category */}

export const getRelatedPostbyCategory = async ({category,
  postId,limit=3}:GetRelatedPostsByCategoryParams)=>{
    try{
       if(!postId || !Types.ObjectId.isValid(postId)){
        return JSON.parse(JSON.stringify({message:"invalid or missing postId"}))
       }
       await connectToDatabase()
       const checkPostId = await Post.findById(postId);
       if(!checkPostId){
        return JSON.parse(JSON.stringify({message:"Post id not found"}))
       }
       const conditions = { $and: [{ ItemCategory: category }, { _id: { $ne: postId } }] }
       const PostQuery = await Post.find(conditions).
       populate({path: "userCreating",model:User,select:"_id firstName lastName"})
       .sort({ createdAt: 'desc' })
       .limit(limit);

       return {data:JSON.parse(JSON.stringify(PostQuery))}

    }catch(error){
      console.log(error);
      handleError(error)
    }
}