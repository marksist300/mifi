// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";
import { Savings } from "../../../../types/supabaseTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Savings | unknown>
) {
  try {
    const { data } = await supabase.from("Savings").select().eq("user_id", 1);
    if (data !== null) {
      const savings = data as Savings[];
      res.status(200).json(savings);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
