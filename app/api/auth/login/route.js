import collection from '@/app/_utils/mongoDB';
import { MAX_AGE, USER_COOKIE } from '@/app/_constants';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const cookieStore = cookies();
  const { userCollection } = collection;
  const { userEmail, userPassword: userPass } = await request.json();
  const user = await userCollection.findOne({
    userEmail,
    userPassword: userPass
  });

  if (!user) {
    return NextResponse.json(
      { message: 'Unauthorized Access' },
      { status: 401 }
    );
  }

  const secret = process.env.JWT_SECRET || '';
  const token = sign(
    {
      userEmail
    },
    secret,
    { expiresIn: MAX_AGE }
  );

  cookieStore.set(USER_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/',
    domain:
      process.env.NODE_ENV === 'development' ? '.localhost' : '.vercel.com'
  });

  const response = { message: 'Authenticated successfully!' };
  return NextResponse.json(response, {
    status: 200
  });
}
