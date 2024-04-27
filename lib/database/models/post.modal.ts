import {Document,Schema,model, models} from 'mongoose';

export interface IPost extends Document{
   _id:string;
   title:string;
   location:string;
   createdAt:Date;
   description:string;
   imageUrl:string;
   price:string;
   ItemCondition?:string;
   isAvaliable:boolean;
   ItemCategory:string;
   userCreating:{_id:String,firstName:String,lastName:String}
}

const PostSchema = new Schema({
    title:{type:String,required:true},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    description:{type:String},
    imageUrl:{type:String,required:true},
    price:{type:String},
    ItemCondition:{type:String},
    isAvaliable:{type:Boolean,default:false},
    ItemCategory:{type:String},
    userCreating:{type:Schema.Types.ObjectId,ref:"User"}
})

const Post = models.Post || model('Post',PostSchema);

export default Post;