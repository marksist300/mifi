// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";

interface Spending {
  id: number;
  user_id: string;
  spend_type: string;
  spend_amount: number;
  spend_date: Date;
  created_at: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Spending | unknown>
) {
  try {
    const { data } = await supabase.from("Spending").select();
    if (data !== null) {
      const spending = data as Spending[];
      res.status(200).json(spending);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
