import {Document,Schema,model,Models, models} from 'mongoose';

export interface IPost extends Document{
   _id:string;
   title:string;
   location?:string;
   createdAt:Date;
   description?:string;
   imageUrl:string;
   price:string;
   ItemCondition?:string;
   isAvaliable:boolean;
   ItemCategory:{_id:String,name:String};
   user:{_id:String,firstName:String,lastName:String,photo:String}
}

const PostSchema = new Schema({
    title:{type:String,required:true},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    description:{type:String},
    imageUrl:{type:String,required:true},
    price:{type:String,required:true},
    ItemCondition:{type:String},
    isAvaliable:{type:Boolean,default:true},
    ItemCategory:{type:Schema.Types.ObjectId,ref:'Category'},
    user:{type:Schema.Types.ObjectId,ref:"User"}
})

const Post = models.Post || model('Post',PostSchema);

export default Post;