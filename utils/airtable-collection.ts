import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY || "" }).base(
  process.env.AIRTABLE_BASE_ID || ""
);

export default async function getAirtableColletion() {
  const records = await base("Collection")
    .select({ fields: ["Name", "Category", "Url"] })
    .all();
  return records;
}
