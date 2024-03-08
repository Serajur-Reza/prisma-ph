import { prisma } from ".";

export const updatePosts = async () => {
  //   //update single data
  //   const singleUpdate = await prisma.post.update({
  //     where: { id: 7 },
  //     data: {
  //       title: "This is title 4",
  //       content: "This is content 4",
  //       authorName: "Author 4",
  //     },
  //   });
  //   //update multiple data
  //   const multipleUpdate = await prisma.post.updateMany({
  //     where: { title: "This is title 4" },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(multipleUpdate);

  //upsert
  const singleUpsert = await prisma.post.upsert({
    where: { id: 16 },
    update: {
      title: "This is title 5",
    },
    create: {
      title: "This is title 4",
      content: "This is content 4",
      authorName: "Author 4",
    },
  });
  console.log(singleUpsert);
};
