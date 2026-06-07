import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Add a request ID header for tracing
  const requestId = crypto.randomUUID();
  const response = NextResponse.next();
  response.headers.set("x-vine-request-id", requestId);

  // Clamp bot traffic away from heavy pages (future BotID integration)
  const ua = request.headers.get("user-agent") ?? "";
  if (pathname.startsWith("/api/cron") && !ua.includes("vercel-cron")) {
    const auth = request.headers.get("authorization");
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // Future auth check placeholder
  // const token = request.cookies.get("vine-session")?.value;
  // if (PROTECTED_ROUTES.some(r => pathname.startsWith(r)) && !token) {
  //   return NextResponse.redirect(new URL("/onboarding", request.url));
  // }

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals, static files
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
