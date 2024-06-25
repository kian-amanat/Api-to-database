import pg from "pg";
import { POSTGRES_SECRET } from "../database/secrets/index.js";
const { Client } = pg;

const query = async (query, params) => {
  let client;
  try {
    console.log("1");
    console.log(POSTGRES_SECRET);
    client = new Client(POSTGRES_SECRET);
    console.log("2");
    await client.connect();
    console.log("3");
    const res = await client.query(query, params);
    console.log("4");
    return res;
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
};

export { query };
