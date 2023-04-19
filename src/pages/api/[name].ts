// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";
type Data = {
  name: string | string[];
};
let data: any;
const fetchData = async () => {
  const { data: result } = await supabase.from("Stocks").select();
  data = result;
};
fetchData();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  if (req.query.name) {
    res.status(200).json(data);
  } else {
    res.status(200).json({ name: "No name given" });
  }
}
