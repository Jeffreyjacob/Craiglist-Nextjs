import SearchBar from "@/components/shared/SearchBar";
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getAllPosts } from "@/lib/actions/post.action";
import PostCard from "@/components/shared/PostCard";

export default async function Home() {
    
  const posts = await getAllPosts({
    query:'',
    category:'',
    page:1,
    limit:10
  })
  return (
    <main>
      {/**Header section */}
      <div className="w-full bg-hero h-[360px] flex flex-col justify-center items-center px-5 sm:px-4 md:px-6 lg:px-0"
        style={{ width: "100%", height: '360px' }}>
        <p className="md:text-[46px] sm:text-[29px] text-[22px] text-white font-normal leading-tight mb-5 line-clamp-2">
          The World's Largest <br />
          <span className="text-primary-200 font font-semibold">
            Classifieds Advertisiment Website
          </span>
        </p>
        <SearchBar className="flex-center bg-white md:w-[800px] w-full    rounded-full shadow-md border-[1px] border-[#DDDDDD] px-4" />
      </div>


      <div className="w-full flex justify-center items-center my-5 ">
        <Carousel
          opts={{
            align: "center",
          }}
          className="max-w-sm justify-center items-center"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-1/2">
                <div className="p-1">
                  <PostCard post={posts?.data}/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </main>
  );
}
