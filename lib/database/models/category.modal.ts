import {Schema,model,models,Document} from 'mongoose';

export interface ICatgory extends Document{
    _id:string;
    name:string;
    photo:string
}

const CategorySchema = new Schema({
    name:{type:String,required:true,unique:true},
    photo:{type:String}
})

const Category = models.Category || model('Category',CategorySchema)

export default Category