import collection from '@/app/_utils/mongoDB';
import { MAX_AGE, USER_COOKIE } from '@/constants';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
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
  const { userPassword, ...userInfo } = user || {};
  const secret = process.env.JWT_SECRET || '';
  const token = sign(
    {
      userInfo
    },
    secret,
    { expiresIn: MAX_AGE }
  );
  const serialized = serialize(USER_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/'
  });

  const response = { message: 'Authenticated successfully!' };
  return NextResponse.json(JSON.stringify(response), {
    status: 200,
    headers: { 'Set-Cookie': serialized }
  });
}
