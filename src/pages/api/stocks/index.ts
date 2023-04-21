// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";
import { Stocks } from "../../../../types/supabaseTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stocks | unknown>
) {
  try {
    const { data } = await supabase.from("Stocks").select().eq("user_id", 1);
    if (data !== null) {
      const stocks = data as Stocks[];
      res.status(200).json(stocks);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
