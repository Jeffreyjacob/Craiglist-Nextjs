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
        category: string
    }
    path: string
}

export type UpdatePostParams = {
    userId: string
    post: {
        title: string
        description: string
        location: string
        imageUrl: string
        price: string;
        ItemCondition?: string;
        isAvaliable: boolean;
        category: string
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

export type Post = {
    _id: string
    title: string
    description: string
    location: string
    imageUrl: string
    price: string;
    ItemCondition?: string;
    user: {
        _id: string
        firstName: string
        lastName: string,
        photo: string
    }
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
  