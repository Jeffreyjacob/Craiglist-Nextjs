import SearchBar from "@/components/shared/SearchBar";


export default function Home() {
  return (
    <main>
        {/**Header section */}
        <div className="w-full bg-hero h-[360px] flex flex-col justify-center items-center px-5 sm:px-4 md:px-6 lg:px-0"
        style={{width:"100%",height:'360px'}}>
          <p className="md:text-[46px] sm:text-[29px] text-[22px] text-white font-normal leading-tight mb-5 line-clamp-2">
             The World's Largest <br/>
             <span className="text-primary-200 font font-semibold">
             Classifieds Advertisiment Website
             </span>
          </p>
          <SearchBar className="flex-center bg-white md:w-[800px] w-full    rounded-full shadow-md border-[1px] border-[#DDDDDD] px-4"/>
        </div>
    </main>
  );
}
