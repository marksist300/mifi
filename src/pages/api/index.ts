// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any | unknown>
) {
  try {
    const { data } = await supabase
      .from("User_stocks")
      .select("id, buy_price, purchase_date, quantity_held, stock_id(*)")
      .eq("user_id", 1);
    if (data !== null) {
      const stocks = data;
      res.status(200).json(stocks);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
