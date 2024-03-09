import { UserRole } from "@prisma/client";
import { prisma } from ".";

export const createData = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@ph.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "I am radioactive",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "this is title",
      content: "this is the post",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
        ],
        // create: {
        //   categoryId: 3,
        //   // category: {
        //   //   connect: {
        //   //     id: 1,
        //   //   },
        //   // },
        // },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};
