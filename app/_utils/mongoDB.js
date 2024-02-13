import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export async function DB() {
  await client.connect();
  const db = client.db('ahAkashPortfolio');
  const userCollection = db.collection('users');
  return userCollection;
}