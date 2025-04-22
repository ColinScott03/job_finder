import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ message: "Logged out successfully" });
  
    response.cookies.set("sessionToken", "", {
        path: "/",
        expires: new Date(0), // basically force token to expire when user logs out
      }); 

    return response;
  }