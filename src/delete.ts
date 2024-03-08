import { prisma } from ".";

export const deletePosts = async () => {
  //delete single data
  //   const deleteSingle = await prisma.post.delete({ where: { id: 1 } });

  //delete multiple data. if no condition provided all the data will be deleted
  const deleteMultiple = await prisma.post.deleteMany({
    where: { published: false },
  });
  console.log(deleteMultiple);
};
