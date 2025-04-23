import connectMongoDB from "../../../../config/mongodb";
import User from "../../../models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { userId, job } = await  request.json();

    if (!userId || !job) {
        return;
    }

    await connectMongoDB();

    await User.findByIdAndUpdate(userId, {
        $pull: { savedJobs: job }
    });
}