'use server';

import { USER_COOKIE } from '@/app/_constants';
import { cookies } from 'next/headers';

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(USER_COOKIE);
}