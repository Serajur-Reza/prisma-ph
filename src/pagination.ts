import { prisma } from ".";

export const pagination = async () => {
  //offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 1,
    take: 2,
  });

  //   console.log({ offsetData });

  //cursor pagination
  const cursorData = await prisma.post.findMany({
    skip: 1,
    take: 2,
    cursor: { id: 13 },
  });

  //   console.log({ cursorData });

  //sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
    skip: 1,
    take: 2,
    where: {
      title: "This is title 4",
    },
  });

  console.log({ data: sortedData.length });
};
