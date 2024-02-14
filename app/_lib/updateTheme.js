'use server';

import { USER_THEME, USER_THEME_MAX_AGE } from '@/app/_constants';
import { cookies } from 'next/headers';

export async function updateTheme(theme) {
  const cookieStore = cookies();
  cookieStore.set(USER_THEME, theme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: USER_THEME_MAX_AGE,
    path: '/'
  });
}
