import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
  const testCookie = request.cookies.get("test123");

  console.log("Cookie:", testCookie);
  const response = NextResponse.next();

  response.cookies.delete("test123");
  console.log("Removed cookie");

  return response;
};

export default middleware;

export const config = {
  matcher: ["/remove"],
};
