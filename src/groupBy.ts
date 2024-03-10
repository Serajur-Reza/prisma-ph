import { prisma } from ".";

export const groupBy = async () => {
  const groupPosts = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },

    // where: {
    //   authorId: {
    //     gt: 1,
    //   },
    // },

    having: {
      authorId: {
        _count: {
          gt: 1,
        },
      },
    },
  });

  console.log(groupPosts);
};
