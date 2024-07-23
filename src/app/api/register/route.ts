import { User } from "@/models/User";
import mongoose from "mongoose";
//import { NextApiRequest } from "next";

const MONGO_URL =
  "mongodb+srv://momr01:Heartstopper01@cluster0.koly3.mongodb.net/EcommercePizzas?retryWrites=true&w=majority";

export async function POST(req: Request) {
  const body = await req.json();
  mongoose.connect(MONGO_URL);
  const createdUser = await User.create(body);

  return Response.json(createdUser);
}
