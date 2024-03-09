import { PrismaClient } from "@prisma/client";
import { createData } from "./create";
import { relationalQueries } from "./relational-query";
import { filtering } from "./filtering";

export const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query:", e.query);
  console.log("Duration:", e.duration, "ms");
  console.log("Date and Time:", e.timestamp);
});

const main = async () => {
  // await createData();
  await relationalQueries();
  // await filtering();
};

main();
