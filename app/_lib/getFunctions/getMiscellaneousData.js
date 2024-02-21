import { DB } from '@/app/_utils/mongoDB';

export async function getMiscellaneousData() {
  try {
    const { miscellaneousCollection } = await DB();
    const [data] = await miscellaneousCollection.find()?.toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return {};
  }
}
