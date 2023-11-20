import "server-only";

import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface GuestbookTable {
  id: Generated<number>;
  email: string;
  body: string;
  created_by: string;
  updated_at?: string;
}

interface Views {
  slug: string;
  count: number;
}

interface Database {
  Views: Views;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
