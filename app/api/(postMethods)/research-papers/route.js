import { DB } from '@/app/_utils/mongoDB';

export const revalidate = 0;

export async function GET(request) {
  try {
    const { researchPaperCollection } = await DB();
    const researchPapers = await researchPaperCollection.find().toArray();
    return Response.json(researchPapers);
  } catch (error) {
    return Response.json({ message: 'failed to get data' }, { status: 500 });
  }
}
