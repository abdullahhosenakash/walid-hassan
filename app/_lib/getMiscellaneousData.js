import { DB } from '@/app/_utils/mongoDB';

export async function getMiscellaneousData() {
  try {
    const { miscellaneousCollection } = await DB();
    const [user] = await miscellaneousCollection.find()?.toArray();
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    return {};
  }
}
