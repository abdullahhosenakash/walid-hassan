'use server';

import { MAX_AGE, USER_COOKIE } from '@/app/_constants';
import { DB } from '@/app/_utils/mongoDB';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function login(prevState, formData) {
  const userSecret = formData.get('userSecret');
  const userEmail = formData.get('userEmail');
  const userPassword = formData.get('userPassword');
  if (userSecret !== process.env.USER_SECRET) {
    return { errorType: 'userSecret', message: 'Wrong user secret' };
  }

  const cookieStore = cookies();
  const userCollection = await DB();
  const user = await userCollection.findOne({
    userEmail,
    userPassword
  });

  if (!user) {
    return { errorType: 'credential', message: 'Wrong email or password' };
  }

  const secret = process.env.JWT_SECRET || '';
  const token = sign(
    {
      userEmail,
      userName: user.userName
    },
    secret,
    { expiresIn: MAX_AGE }
  );

  cookieStore.set(USER_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/'
  });

  return { errorType: null, message: '' };
}
