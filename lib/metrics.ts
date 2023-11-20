import { unstable_cache } from "next/cache";
import "server-only";
import { queryBuilder } from "./planetscale";

export const getBlogViews = async () => {
  if (!process.env.DATABASE_URL) {
    return 0;
  }

  const data = await queryBuilder
    .selectFrom("Views")
    .select(["count"])
    .execute();

  return data.reduce((acc, curr) => acc + Number(curr.count), 0);
};

export const getViewsCount = async () => {
  return queryBuilder.selectFrom("Views").select(["slug", "count"]).execute();
};
