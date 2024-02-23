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
  const db = client.db('portfolio');
  const userCollection = db.collection('user');
  const miscellaneousCollection = db.collection('miscellaneous');
  const projectCollection = db.collection('projects');
  const certificationCollection = db.collection('certifications');
  const researchPaperCollection = db.collection('researchPapers');
  const skillCollection = db.collection('skills');
  const collections = {
    userCollection,
    miscellaneousCollection,
    certificationCollection,
    projectCollection,
    researchPaperCollection,
    skillCollection
  };
  return collections;
}
