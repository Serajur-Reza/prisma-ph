import { prisma } from ".";

export const interactiveTrasaction = async () => {
  const result = await prisma.$transaction(async (tx) => {
    //query 1
    const getAllPosts = await tx.post.findMany({
      where: {
        published: true,
      },
    });

    //query 2
    const countUsers = await tx.user.count();

    //query 3
    const updateUser = await tx.user.update({
      where: {
        id: 6,
      },
      data: {
        age: 45,
      },
    });
    return { getAllPosts, countUsers, updateUser };
  });

  console.log(result);
};
