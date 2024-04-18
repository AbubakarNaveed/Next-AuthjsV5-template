import { auth } from "../auth";
import { NextResponse } from "next/server";
export default auth((req) => {
  // req.auth
  if (req.nextUrl.pathname === "/details" && !req.auth) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
  console.log("Route is " + req.nextUrl.pathname);
});

//middleware is invoked by the paths mentioned in the matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
