import { z } from "zod";


export const PostFormScehma = z.object({
    title:z.string().min(3,'Title must be at least 3 charaters'),
    description:z.string().min(3,'Description must be at 3 characters').max(
       400,'Description must be at less than 400 characters'
    ),
    location:z.string().min(3,'Location must be at least 3 Characters').max(
        400,'Location must ne less than 400 characters'
    ),
    imageUrl:z.string(),
    price:z.string(),
    ItemCondition:z.string(),
    isAvaliable:z.boolean(),
    ItemCategory:z.string(),
})