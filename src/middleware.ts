import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
const handler = nextConnect<NextApiRequest, NextApiResponse>();

const middleware = async () => {};

export default middleware;
