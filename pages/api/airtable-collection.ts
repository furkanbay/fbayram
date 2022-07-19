import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY || "" }).base(
  process.env.AIRTABLE_BASE_ID || ""
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const records = await base("Collection").select({}).all();
  res.status(200).json({ records });
}
