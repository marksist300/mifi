// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";
import { User } from "../../../../types/supabaseTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | unknown>
) {
  try {
    const { data } = await supabase.from("Users").select().eq("id", 1);
    if (data !== null) {
      const user = data as User[];
      res.status(200).json(user);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
