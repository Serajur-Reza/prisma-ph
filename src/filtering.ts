import { prisma } from ".";

export const filtering = async () => {
  // and
  // const res = await prisma.post.findMany({
  //   where: {
  //     AND: [
  //       {
  //         title: {
  //           contains: "titler",
  //         },
  //       },
  //       {
  //         published: true,
  //       },
  //     ],
  //   },
  // });

  // Or
  //   const res = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "titler",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  // not
  //   const res = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: "title 1",
  //           },
  //         },
  //       ],
  //     },
  //   });

  //startswith
  //   const res = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         startsWith: "user1",
  //       },
  //     },
  //   });

  //contains
  //   const res = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         contains: "ph",
  //       },
  //     },
  //   });

  //endswith
  //   const res = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: ".com",
  //       },
  //     },
  //   });

  //equals
  //   const res = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         equals: "user1@ph.com",
  //       },
  //     },
  //   });

  //in
  //   const userNameArray = ["user1", "user3", "user5"];

  //   const res = await prisma.user.findMany({
  //     where: {
  //       username: {
  //         in: userNameArray,
  //       },
  //     },
  //   });

  const res = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(res, { depth: Infinity });
};
