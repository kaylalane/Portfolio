import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const quotes = await prisma.quote.findMany({});

  return NextResponse.json(quotes);
}

export async function POST(req: Request, res: Response) {
  const q = await req.json();

  const newQuote = await prisma.quote.create({
    data: {
      quote: q.quote,
      author: q.author,
      origin: q.origin,
    },
  });

  return NextResponse.json(newQuote);
}
