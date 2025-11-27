import { Client, TablesDB } from "node-appwrite";

const client = new Client();

const envConfig = {
    endpoint: process.env.APPWRITE_ENDPOINT,
    project: process.env.APPWRITE_PROJECT_ID,
    key: process.env.APPWRITE_API_KEY,
    databaseId: process.env.APPWRITE_DATABASE_ID,
    tableIdProducts: process.env.APPWRITE_TABLE_ID_PRODUCTS,
};

console.log("ENV CONFIG:", envConfig.endpoint);
client.setEndpoint(envConfig.endpoint);
client.setProject(envConfig.project);
client.setKey(envConfig.key);

const db = new TablesDB(client);

export { db, envConfig };
