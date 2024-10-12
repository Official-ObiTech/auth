import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { email, name } = await request.json();
  await connectMongoDb();
  await User.create({ email, name });
  return NextResponse.json({ massage: "user regesiter" }, { status: 200 });
}
