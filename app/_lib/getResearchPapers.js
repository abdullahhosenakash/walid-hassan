import { DB } from '@/app/_utils/mongoDB';

export async function getResearchPapers() {
  try {
    const { researchPaperCollection } = await DB();
    const researchPapers = await researchPaperCollection.find().toArray();
    return JSON.parse(JSON.stringify(researchPapers));
  } catch (error) {
    return [];
  }
}
