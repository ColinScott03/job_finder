import connectMongoDB from "../../../../../config/mongodb";
import User from "../../../../models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface RouteParams {
    params: { id: string };
}

export async function PUT(request:NextRequest, { params}:RouteParams ) {
    const { id } = await params;
    const {
        savedJobs: savedJobs,
        name: name,
        interests: interests,
        location: location,
        industry: industry,
        jobType: jobType         
    } = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { savedJobs, name, interests, location, industry, jobType });
    return NextResponse.json({ message: "Preferences updated" }, { status: 200 });
}

export async function GET(request:NextRequest, { params }:RouteParams) {
    const { id } = await params;

    await connectMongoDB();

    try {
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
    }
}