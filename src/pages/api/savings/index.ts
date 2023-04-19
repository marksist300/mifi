// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";

interface Savings {
  id: number;
  user_id: string;
  savings_type: string;
  savings_amount: number;
  start_date: Date;
  savings_motivation: string;
  target_amount: number;
  target_date: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Savings | unknown>
) {
  try {
    const { data } = await supabase.from("Savings").select();
    if (data !== null) {
      const savings = data as Savings[];
      res.status(200).json(savings);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
