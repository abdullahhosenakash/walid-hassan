import { DB } from '@/app/_utils/mongoDB';

export async function GET(request) {
  try {
    const { projectCollection } = await DB();
    const projects = await projectCollection.find()?.toArray();
    return Response.json(projects);
  } catch (error) {
    return Response.json({ message: 'failed to get data' }, { status: 500 });
  }
}
