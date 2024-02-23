import { DB } from '@/app/_utils/mongoDB';

export const revalidate = 0;

export async function GET(request) {
  try {
    const { certificationCollection } = await DB();
    const certifications = await certificationCollection.find()?.toArray();
    return Response.json(certifications);
  } catch (error) {
    return Response.json({ message: 'failed to get data' }, { status: 500 });
  }
}
