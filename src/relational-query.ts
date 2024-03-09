import { prisma } from ".";

export const relationalQueries = async () => {
  //fluent api
  //   const res = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .profile();

  //relational filters
  const publishingPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  // console.dir(publishingPostUsers, { depth: Infinity });
};
