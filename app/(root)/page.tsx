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
import { IPost } from "@/lib/database/models/post.modal";
import SelectCategory from "@/components/shared/SelectCategory";
import PostRow from "@/components/shared/PostRow";

export default async function Home() {
    
const Post = await getAllPosts({
  query:'',
  category:'',
  limit:10,
  page:1
})


  return (
    <main>
      {/**Header section */}
      <div className="flex flex-col  justify-center items-center px-5 sm:px-4 md:px-6 lg:px-0"
        style={{ width: "100%", height: '360px',backgroundImage:'url("https://ucarecdn.com/23b89b0a-339d-40a5-bb3a-2a3a70dc458f/Rectangle3.png")'}}>
        <p className="md:text-[46px] sm:text-[29px] text-[22px] text-white font-normal leading-tight mb-5 line-clamp-2">
          The World's Largest <br />
          <span className="text-primary-200 font font-semibold">
            Classifieds Advertisiment Website
          </span> 
        </p>
        <SearchBar className="flex-center bg-white md:w-[800px] w-full    rounded-full shadow-md border-[1px] border-[#DDDDDD] px-4" />
      </div>
        
        <div className="wrapper flex flex-col justify-center items-center my-10 mb-5">
          <h3 className="text-[24px] font-semibold text-[#555555] mb-8">Some Categories</h3>
          <SelectCategory/>
        </div>
          
          {/**Post row */}
          <PostRow Post={Post?.data}/>
        

    </main>
  );
}
