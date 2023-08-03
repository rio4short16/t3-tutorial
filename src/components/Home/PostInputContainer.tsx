import React, { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import { api } from "~/utils/api";

const PostInputContainer = () => {
  const { data } = api.post.getAll.useQuery();
  return (
    <React.Fragment>
      <div className="container-w flex flex-col items-start justify-start">
        <div className="input-container flex w-full flex-col items-start justify-start gap-y-4">
          <textarea
            placeholder="Share something..."
            className="textarea text-normal w-full resize-none rounded-lg px-4 py-3 text-base font-light text-black"
            defaultValue=""
          ></textarea>
          <button className="btn btn-md ml-auto rounded-lg bg-white px-16 py-2 text-base font-semibold text-[#2e026d] md:px-24 md:py-3">
            Post
          </button>
        </div>
      </div>
      <PostsContainer posts={data as any[]} />
    </React.Fragment>
  );
};

export default PostInputContainer;
