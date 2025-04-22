import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/auth', '/gallery', '/settings'];

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('sessionToken')?.value;
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtected && !token) {
    console.log(`Blocked unauthorized access to: ${pathname}`);
    return NextResponse.redirect(new URL('/', request.url)); // Redirect to homepage or login page
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/gallery/:path*', '/settings/:path*'],
};
