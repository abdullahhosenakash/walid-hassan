import { DB } from '@/app/_utils/mongoDB';

export async function getMiscellaneousData() {
  const { miscellaneousCollection } = await DB();
  const [user] = (await miscellaneousCollection.find()?.toArray()) || [];
  return user;
}
