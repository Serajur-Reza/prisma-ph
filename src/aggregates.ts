import { prisma } from ".";

export const aggregates = async () => {
  //average
  //   const avgAge = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //   });

  //   //count based on field type
  //   const countAge = await prisma.user.aggregate({
  //     _count: {
  //       age: true,
  //     },
  //   });

  //finds total count
  //   const countAge = await prisma.user.count();

  //sum
  //   const sumAge = await prisma.user.aggregate({
  //     _sum: {
  //       age: true,
  //     },
  //   });

  //max
  //   const maxAge = await prisma.user.aggregate({
  //     _max: {
  //       age: true,
  //     },
  //   });

  //min
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};
