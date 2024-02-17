'use server';

import { USER_COOKIE } from '@/app/_constants/constants';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function getUser() {
  const cookieStore = cookies();
  const token = cookieStore.get(USER_COOKIE);
  if (!token) {
    return {
      user: null,
      error: 'Unauthorized'
    };
  }

  const secret = process.env.JWT_SECRET || '';

  try {
    const decoded = verify(token.value, secret);
    const user = { userName: decoded.userName, userEmail: decoded.userEmail };

    return {
      user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: 'something went wrong'
    };
  }
}
