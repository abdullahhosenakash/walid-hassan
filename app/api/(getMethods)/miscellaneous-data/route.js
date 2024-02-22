import { USER_COOKIE } from '@/app/_constants/constants';
import { DB } from '@/app/_utils/mongoDB';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET(request) {
  try {
    const cookieStore = cookies();
    const userCookie = cookieStore.get(USER_COOKIE);
    try {
      console.log('hmm');
      verify(userCookie?.value, process.env.JWT_SECRET);
      const { miscellaneousCollection } = await DB();
      const [data] = await miscellaneousCollection.find()?.toArray();
      return Response.json(data);
    } catch (error) {
      return Response.json(
        { message: 'Unauthorized access detected' },
        { status: 401 }
      );
    }
  } catch (error) {
    return Response.json({ message: 'Failed to get data' }, { status: 500 });
  }
}
