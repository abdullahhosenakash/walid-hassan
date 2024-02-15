'use server';

import { DB } from '@/app/_utils/mongoDB';

export async function getSkills() {
  try {
    const { skillCollection } = await DB();
    const [skills] = await skillCollection.find()?.toArray();
    return JSON.parse(JSON.stringify(skills));
  } catch (error) {}
  return {};
}
