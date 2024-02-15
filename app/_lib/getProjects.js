import { DB } from '@/app/_utils/mongoDB';

export async function getProjects() {
  try {
    const { projectCollection } = await DB();
    const projects = await projectCollection.find().toArray();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    return {};
  }
}
