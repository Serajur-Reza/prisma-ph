import { prisma } from ".";

export const rawQuery = async () => {
  //   const posts = await prisma.$queryRaw`SELECT * FROM posts`;

  await prisma.$queryRaw`truncate table "categories" cascade`;
  //   console.log(posts);
};
