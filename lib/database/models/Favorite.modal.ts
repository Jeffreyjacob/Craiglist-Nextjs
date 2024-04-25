import {Schema,model,models,Document} from 'mongoose';

export interface IFavorite extends Document{
    _id:string;
    title:string;
    location?:string;
    createdAt:Date;
    imageUrl:string;
    price:string;
    postAdded:boolean;
    user:{_id:String,Firstname:String,LastName:String}
}

const FavoriteSchema = new Schema({
    title:{type:String,required:true},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    imageUrl:{type:String,required:true},
    price:{type:String},
    postAdded:{type:Boolean,default:false},
    user:{type:Schema.Types.ObjectId,ref:"User"}
})


const Favourite = models.Favourite || model('Favourite',FavoriteSchema)

export default Favourite;