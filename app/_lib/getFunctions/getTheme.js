'use server';

import { USER_THEME } from '@/app/_constants/constants';
import { cookies } from 'next/headers';

export async function getTheme() {
  const savedTheme = cookies().get(USER_THEME)?.value || 'light';
  return savedTheme;
}
