// "use server"

// import { CreateFavoriteParams, FavoriteParams, RemoveFromFavoriteParams} from "@/types";
// import { Types } from "mongoose";
// import User from "../database/models/user.modal";
// import { connectToDatabase } from "../database";
// import Favourite, { IFavorite } from "../database/models/favorite.modal";
// import { handleError } from "../utils";
// import Post from "../database/models/post.modal";

// export const AddFavoriteList  = async ({title,price,imageUrl,location,userId,postId}:CreateFavoriteParams)=>{
//     try{
//          if(!userId || !Types.ObjectId.isValid(userId)){
//             throw new Error('invalid or missing userId');
//          }
//          await connectToDatabase()
//          const userPosting = await User.findById(userId);
//          if(!userPosting ){
//             throw new Error('user not found');
//          }
//          const favorite = await Favourite.create({
//             title,
//             price,
//             imageUrl,
//             location,
//             postId,
//             user: new Types.ObjectId(userId)
//          })
//          const ChangeFilledIcon = await Post.findByIdAndUpdate(
//              postId,
//             { isAvaliable:true },
//             {new:true}
//          )
//          return JSON.parse(JSON.stringify({message:"Post added to favorite"}))
//     }catch(error){ 
//       handleError(error)
//     }
// }


// export const RemoveFromFavorite = async ({userId,postId}:RemoveFromFavoriteParams) =>{
//     try{
//        if(!postId || !userId){
//            return JSON.parse(JSON.stringify({message:"userId or postId is required"}))
//        }
//        await connectToDatabase()
//        const findFavoriteToDelete = await  Favourite.find({postId:postId,user:userId})
//        if(!findFavoriteToDelete){
//         return JSON.parse(JSON.stringify({message:"favorite not found"}))
//        }

//        const deleteFavorite = await Favourite.findOneAndDelete({
//         postId:postId,
//         user:userId
//        })

//        const ChangeFilledIcon = await Post.findByIdAndUpdate(
//         postId,
//         { isAvaliable:false },
//         {new:true}
//        )
      
//        return JSON.parse(JSON.stringify({data:findFavoriteToDelete}))
//     }catch(error){
//      handleError(error)
//     }
// }
