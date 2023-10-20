import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
// import middleware from "next-auth/middleware";

// export default middleware;

export const config = {
  // *: zero or more params
  // +: one or more
  // ?: zero or one
  //   matcher: ["/users/:id*"],
  matcher: ["/dashboard/:path*"], // more likely in real app
};
