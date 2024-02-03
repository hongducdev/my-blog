import React from "react";
import FallbackImage from "./FallbackImage";
import Link from "next/link";

const PostCard = () => {
  return (
    <Link
      className="w-full h-auto bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-md"
      href=""
    >
      <div className="w-full h-[150px] relative">
        <FallbackImage
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hongducdev"
          fill
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 bg-neutral-300 dark:bg-neutral-950 pl-1 pr-2 py-0.5 rounded-full">
            <div className="w-3 h-3 bg-green-1000 rounded-full"></div>
            <p className="text-xs text-neutral-800 dark:text-neutral-400 font-medium">
              Tips and tricks
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-neutral-300 dark:bg-neutral-950 pl-1 pr-2 py-0.5 rounded-full">
            <div className="w-3 h-3 bg-green-1000 rounded-full"></div>
            <p className="text-xs text-neutral-800 dark:text-neutral-400 font-medium">
              02/02/2024
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mt-3">
          Title of Post
        </h2>
        <p className="text-sm text-neutral-400">Some description of the post</p>
      </div>
    </Link>
  );
};

export default PostCard;
