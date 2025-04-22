// src/app/api/login/route.ts

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import connectMongoDB from "../../../../config/mongodb";
import User from "@/models/itemSchema";

export async function POST(request: NextRequest) {
  await connectMongoDB();

  const { username, password } = await request.json();
  const user = await User.findOne({ username });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Login successful", id: user._id }, { status: 200 });
  response.cookies.set("sessionToken", String(user._id), {
    httpOnly: true,
    path: "/",
  });
  return response;
}
