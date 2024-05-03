import { Post } from '@/types';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import PostCard from './PostCard';
import { IPost } from '@/lib/database/models/post.modal';

type Props = {
    Post:Post[]
}

const PostRow = ({Post}:Props) => {
  return (
    <div className="wrapper flex justify-center items-center my-10">
        <Carousel
          opts={{
            align: "center",
          }}
          className="justify-center items-center "
        >
          <CarouselContent className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl ">
            {Post?.map((post,index:any) => (
              <CarouselItem key={index} className="flex aspect-square justify-center items-center  sm:basis-1/2 lg:basis-1/3 xl:basis-1/4  py-6 md:pl-5">
                  <PostCard post={post}/>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
      </div>
  )
}

export default PostRow