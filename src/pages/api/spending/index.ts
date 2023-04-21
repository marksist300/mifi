// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";
import { Spending } from "../../../../types/supabaseTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Spending | unknown>
) {
  try {
    const { data } = await supabase.from("Spending").select().eq("user_id", 1);
    if (data !== null) {
      const spending = data as Spending[];
      res.status(200).json(spending);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
