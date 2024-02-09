import { USER_COOKIE } from '@/constants';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(USER_COOKIE);
  if (!token) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const secret = process.env.JWT_SECRET || '';

  try {
    verify(token.value, secret);

    const response = { user: token.value };
    return Response.json(response);
  } catch (error) {
    return Response.json({ message: 'Something went wrong!' }, { status: 400 });
  }
}
