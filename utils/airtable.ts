import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY || "" }).base(
  process.env.AIRTABLE_BASE_ID || ""
);

async function getAirtable(tableName: string) {
  const records = await base(tableName).select().all();
  return records;
}

export { getAirtable };
