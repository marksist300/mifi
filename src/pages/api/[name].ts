// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  if (req.query.name) {
    res.status(200).json({ name: req.query.name });
  } else {
    res.status(200).json({ name: "No name given" });
  }
}
