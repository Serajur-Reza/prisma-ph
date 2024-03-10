import { prisma } from ".";

export const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "Radioactive",
      email: "ra@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 8,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log({ userData });
  console.log({ updatedData });
};
