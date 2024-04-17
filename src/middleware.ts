import { auth } from "../auth";
import { NextResponse } from "next/server";
export default auth((req) => {
  // req.auth
  if (req.nextUrl.pathname === "/details" && !req.auth) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
  console.log("Route is " + req.nextUrl.pathname);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
