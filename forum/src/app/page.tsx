import React from "react";
import PostSection from "./sections/postSection";


export default function Home() {
  return (
    <div className = "flex h-screen">
      <div className = "text-[4.49vw] py-[1vw] px-[3vw] w-5/9 h-full overflow-hidden">
        Trending
      </div>
      <div className = "border-l-2 border-black h-full overflow-auto">
        "Posts"
        <PostSection></PostSection>
      </div>
    </div>
  );
}
