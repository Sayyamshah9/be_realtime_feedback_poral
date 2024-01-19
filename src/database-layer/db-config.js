const { MongoClient } = require("mongodb");

const dbName = process.env.DB_NAME;
const DB_URL = process.env.DB_URL;

const { DB_CONFIG } = require("../../utilities/constants");
const { COLLECTION_NAME } = DB_CONFIG;

const client = new MongoClient(DB_URL, {
  useNewUrlParser: true,
  monitorCommands: true,
});

const createDbConnection = async () => {
  try {
    await client.connect();
    console.log("Database Connection Established Successfully!!");
  } catch (error) {
    console.log(error);
  }
};

//Queries
const insertOne = async (_payloadDoc) => {
  let queryResponse = null;
  try {
    queryResponse = await client
      .db(dbName)
      .collection(COLLECTION_NAME)
      .insertOne(_payloadDoc);
  } catch (error) {
    console.log(error);
  }
  return queryResponse;
};

const find = async (_filter) => {
  let queryResponse = null;
  try {
    queryResponse = await client
      .db(dbName)
      .collection(COLLECTION_NAME)
      .find(_filter)
      .toArray();
  } catch (error) {
    console.log(error);
  }
  return queryResponse;
};

module.exports = {
  createDbConnection,
  insertOne,
  find,
};
