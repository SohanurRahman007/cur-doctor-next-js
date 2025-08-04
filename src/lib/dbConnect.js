// lib/dbConnect.js (or .ts)
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri) throw new Error("Please define MONGODB_URI in your environment");
if (!dbName) throw new Error("Please define DB_NAME in your environment");

// Global cache for hot reload in dev
let cachedClient = null;

export const collectionNameObj = {
  serviceCollection: "car-services",
  userCollection: "users",
};

export async function dbConnect(collectionName) {
  if (!cachedClient) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    cachedClient = await client.connect();
  }

  return cachedClient.db(dbName).collection(collectionName);
}
