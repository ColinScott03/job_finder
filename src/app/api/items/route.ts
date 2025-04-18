import connectMongoDB from "../../../../config/mongodb";
import User from "../../../models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// add user
export async function POST(request: NextRequest) {
    const { username, password } = await request.json();
    await connectMongoDB();
    await User.create({ username, password });
    return NextResponse.json({ message: "User added successfully" }, { status: 201 });
}