import connectMongoDB from "../../../../config/mongodb";
import User from "../../../models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

// add user
export async function POST(request: NextRequest) {
    await connectMongoDB();

    const { username, password } = await request.json();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return NextResponse.json(
          { message: "Username already exists" },
          { status: 409 }
        );
      }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({ username, password: hashedPassword });
    return NextResponse.json({ message: "User added successfully", id: newUser._id }, { status: 201 });
}