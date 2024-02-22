import { DB } from '@/app/_utils/mongoDB';

export async function GET(request) {
  try {
    const { miscellaneousCollection } = await DB();
    const [data] = await miscellaneousCollection.find()?.toArray();
    return Response.json(data);
  } catch (error) {
    return Response.json({ message: 'Failed to get data' }, { status: 500 });
  }
}
