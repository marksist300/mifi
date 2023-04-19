// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";

interface Stocks {
  id: number;
  company_name: string;
  ticker: string;
  buy_price: number;
  purchased_date: Date;
  created_at: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stocks | unknown>
) {
  try {
    const { data } = await supabase.from("Stocks").select();
    if (data !== null) {
      const stocks = data as Stocks[];
      res.status(200).json(stocks);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
