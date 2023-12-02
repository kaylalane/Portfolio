"use server";

import auth from "./api/auth/[...nextauth]";
import { type Session } from "next-auth";

async function getSession(): Promise<Session> {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}
