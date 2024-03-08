import { prisma } from ".";

export const findPosts = async () => {
  //find all
  const getAllDataFromDB = await prisma.post.findMany({
    select: { authorName: true },
  });

  console.log({ getAllDataFromDB });

  //find first and find first or throw error
  const getFirstDataDB = await prisma.post.findFirst({ where: { id: 3 } });

  //find unique and find unique or throw error
  const findUnique = await prisma.post.findUnique({
    where: { id: 16 },
    select: { title: true, content: true, authorName: true },
  });

  console.log({ findUnique });
};
