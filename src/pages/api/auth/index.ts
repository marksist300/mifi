// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/supabaseConfig";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  created_at: Date;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | unknown>
) {
  try {
    const { data } = await supabase.from("Users").select();
    if (data !== null) {
      const user = data as User[];
      res.status(200).json(user);
    }
  } catch (error: unknown) {
    res.status(500).json({ error: error });
    console.error(error);
  }
}
