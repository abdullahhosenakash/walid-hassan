import { DB } from '@/app/_utils/mongoDB';

export async function GET() {
  try {
    const { skillCollection } = await DB();
    const [skills] = await skillCollection.find()?.toArray();
    return Response.json(skills);
  } catch (error) {}
  return Response.json({});
}
