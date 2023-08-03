import { RouterOutputs } from "~/utils/api";

import Image from "next/image";
import React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["post"]["getAll"][number];

const PostsContainer = ({ posts }: { posts: PostWithUser[] }) => {
  console.log(posts);
  return (
    <div className="container-w mt-4 flex flex-col items-start justify-start">
      <div className="min-h-[70vh] w-full overflow-y-auto overflow-x-hidden">
        {posts?.map(({ post, author }) => (
          <div
            key={post?.id}
            className="post-container w-full rounded-xl bg-white px-4 py-3 text-black"
          >
            <div className="post-container-header flex flex-row items-center justify-between">
              <div className="flex justify-start gap-x-2">
                <Image
                  width={30}
                  height={30}
                  src={
                    author?.profilePicture
                      ? author?.profilePicture?.toString()
                      : ""
                  }
                  alt={author?.username ? author?.username?.toString() : ""}
                />
                <p>@{author?.username}</p>
              </div>
              <p>{dayjs(post.createdAt).fromNow()}</p>
            </div>
            <div className="post-container-content py-4">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
