import PostCard from "@/components/shared/PostCard";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="relative h-[280px]">
        <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] z-[2] rounded-lg"></div>
        <div className="absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-neutral-100">
          <h1 className="text-5xl font-bold">Hồng Đức Dev</h1>
          <p className="text-xl font-medium mt-2">
            Blog chia sẻ bài tập, những kinh nghiệm mà mình tích lũy được trong
            quá trình học lập trình của mình tới các bạn.
          </p>
        </div>
        <Image
          src="https://user-images.githubusercontent.com/73995275/222146888-2ac7f3cc-a14b-4b98-9bd2-16fa99ea11f8.png"
          alt="hongducdev"
          fill
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default HomePage;
