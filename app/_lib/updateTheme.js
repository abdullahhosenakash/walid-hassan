'use server';

import { USER_THEME } from '@/app/_constants';
import { cookies } from 'next/headers';

export async function updateTheme(theme) {
  const cookieStore = cookies();
  cookieStore.set(USER_THEME, theme);
}
