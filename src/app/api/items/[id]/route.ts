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

