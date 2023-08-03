import { withClerkMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default withClerkMiddleware(() => {
  console.log("Middleware running...");
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico).*)"],
};
