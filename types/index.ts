import { IPost } from "@/lib/database/models/post.modal"

// ====== USER PARAMS
export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
}

export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string
}

// ====== POST PARAMS
export type CreatePostParams = {
    userId: string
    post: {
        title: string
        description: string
        location: string
        imageUrl: string
        price: string;
        ItemCondition?: string;
        isAvaliable: boolean;
        ItemCategory: string;
    }
    path: string
}

export type UpdatePostParams = {
    userId: string
    post: {
        _id: string
        title: string
        description: string
        location: string
        imageUrl: string
        price: string;
        ItemCondition?: string;
        isAvaliable: boolean;
        ItemCategory: string;
    }
    path: string
}

export type DeletePostParams = {
    postId: string
    path: string
}

export type GetAllPostParams = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetPostByUserParams = {
    userId: string
    limit?: number
    page: number
}

export type GetRelatedPostsByCategoryParams = {
    category: string
    postId: string
    limit?: number
}


export type Post = {
    _id: string
    title: string
    description: string
    location: string
    imageUrl: string
    price: string;
    ItemCondition?: string;
    userCreating: {
        _id: string
        firstName: string
        lastName: string,
        photo: string
    }
    createdAt: string,
    isAvaliable: boolean,
    ItemCategory: string
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
    categoryName: string
    categoryPhoto: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
    postTitle: string
    postId: string
    price: string
    buyerId: string
}

export type CreateOrderParams = {
    stripeId: string
    postId: string
    buyerId: string
    totalAmount: string
    createdAt: Date
}
export type GetOrdersByPostParams = {
    postId: string
    searchString: string
}

export type GetOrdersByUserParams = {
    userId: string | null
    limit?: number
    page: string | number | null
}

export type GetOrderByUser = {
    _id: string,
    createdAt: string,
    stripeId: string
    totalAmount: string,
    post: {
      _id:string,
      title:string,
      imageUrl:string
    },
    buyer:string,
    __v: number
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export type CreateFavoriteParams = {
    postId: string,
    userId: string,
    title: string,
    price: string,
    imageUrl: string,
    location: string

}
export type RemoveFromFavoriteParams = {
    postId: string,
    userId: string
}

export type FavoriteParams = {
    id: string,
    title: string,
    location: string,
    price: string,
    postId: string,
    user: string
}

export const PostDefaultValues = {
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    price: "",
    ItemCondition: "",
    isAvaliable: false,
    ItemCategory: "",
}
