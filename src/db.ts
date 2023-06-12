import { MongoClient } from 'mongodb';

const { MONGO_URI } = process.env;

export const client = MONGO_URI ? new MongoClient(MONGO_URI) : undefined;
export const db = client ? client.db() : undefined;
