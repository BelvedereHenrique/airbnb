import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!(await isEmailAvailable(email))) {
    return NextResponse.json(
      {
        error: true,
        message: 'Email is already taken',
      },
      {
        status: 400,
      },
    );
  }
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}

async function isEmailAvailable(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return !user;
}
