import { PrismaClient } from "@prisma/client";
import { findPosts } from "./find";
import { createPosts } from "./create";
import { updatePosts } from "./update";
import { deletePosts } from "./delete";
import { pagination } from "./pagination";

export const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title",
  //       content: "This is content",
  //       authorName: "Raphael",
  //     },
  //   });
  //find posts
  //   findPosts();
  //create posts
  //   createPosts();
  //update posts
  //   updatePosts();
  //delete posts
  //   deletePosts();
  //pagination and sorting
  pagination();
};

main();
