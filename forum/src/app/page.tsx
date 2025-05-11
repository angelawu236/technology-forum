import React from "react";
import PostSection from "./sections/PostSection";


export default function Home() {
  return (
    <div className = "flex h-screen">
      <div className = "basis-2/9 text-[4.49vw] py-[1vw] px-[2vw] h-full overflow-hidden">
        Trending
      </div>
      <div className = "border-r-2 basis-5/9 border-l-2 border-black h-full overflow-auto">
        <PostSection></PostSection>
      </div>
      <div className = "basis-2/9">
        Topics
      </div>
    </div>
  );
}
