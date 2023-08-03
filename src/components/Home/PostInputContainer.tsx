import React, { useEffect, useRef, useState } from "react";
import PostsContainer from "./PostsContainer";
import { api } from "~/utils/api";
import LoadingComponent from "../Global/LoadingComponent";

const PostInputContainer = () => {
  const contentRef = useRef<any>(null);
  const ctx = api.useContext();
  const { data, isLoading: gettingPosts } = api.post.getAll.useQuery();
  const { mutate, isLoading: insertingPost } = api.post.create.useMutation({
    onSuccess: () => {
      void ctx.post.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const content = contentRef?.current?.value;
    if (content !== "") {
      mutate({ content: content });
    }
  };

  if (insertingPost || gettingPosts) return <LoadingComponent />;

  return (
    <React.Fragment>
      <div className="container-w flex flex-col items-start justify-start">
        <div className="input-container flex w-full flex-col items-start justify-start gap-y-4">
          <textarea
            placeholder="Share something..."
            className="textarea text-normal w-full resize-none rounded-lg px-4 py-3 text-base font-light text-black"
            ref={contentRef}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="btn btn-md ml-auto rounded-lg bg-white px-16 py-2 text-base font-semibold text-[#2e026d] md:px-24 md:py-3"
          >
            Post
          </button>
        </div>
      </div>
      <PostsContainer posts={data as any[]} />
    </React.Fragment>
  );
};

export default PostInputContainer;
