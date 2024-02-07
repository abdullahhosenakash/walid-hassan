import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

await client.connect();
const db = client.db('ahAkashPortfolio');
const userCollection = db.collection('users');
const collection = { userCollection };
export default collection;
