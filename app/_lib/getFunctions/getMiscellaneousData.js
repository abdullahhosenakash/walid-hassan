import { DB } from '@/app/_utils/mongoDB';

export async function getMiscellaneousData() {
  try {
    console.log(new Date(), 'before fetch');
    const { miscellaneousCollection } = await DB();
    const [data] = await miscellaneousCollection.find()?.toArray();
    console.log(new Date(), 'after fetch');
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return {};
  }
}
