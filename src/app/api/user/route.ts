import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../config/mongodb";
import User from "../../../models/itemSchema"; // adjust path as needed

export async function GET(request: NextRequest) {
  await connectMongoDB();

  const userId = request.nextUrl.searchParams.get("id");
  if (!userId) {
    return NextResponse.json({ message: "User ID required" }, { status: 400 });
  }

  const user = await User.findById(userId);
  if (!user || !user.savedJobs) {
    return NextResponse.json({ jobs: [] }, { status: 200 });
  }

  return NextResponse.json({ name: user.name });
}