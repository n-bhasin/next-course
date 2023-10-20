import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

//request - arg- use not to cache the data
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validating = schema.safeParse(body);

  if (!validating.success)
    return NextResponse.json(validating.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user)
    return NextResponse.json(
      { error: `User with ${user.email} already exist` },
      { status: 400 }
    );

  const newUser = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(newUser);
}
