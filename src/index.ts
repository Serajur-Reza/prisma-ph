import { PrismaClient } from "@prisma/client";
import { aggregates } from "./aggregates";
import { groupBy } from "./groupBy";
import { batchTransaction } from "./batch";
import { interactiveTrasaction } from "./interactive";
import { rawQuery } from "./raw-query";

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
  // await aggregates();
  // await groupBy();
  // await batchTransaction();
  // await interactiveTrasaction()

  await rawQuery();
};

main();
