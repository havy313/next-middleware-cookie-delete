import { CookieSerializeOptions } from "next/dist/server/web/types";
import { NextResponse } from "next/server";

const cookieOptions: CookieSerializeOptions = {
  maxAge: 1000 * 60 * 60 * 24 * 7,
  httpOnly: true,
};

const handler = () => {
  const response = new NextResponse("Cookie set", {
    status: 200,
    statusText: "OK",
  });

  response.cookies.set("test123", "test123", cookieOptions);

  return response;
};

export default handler;

export const config = {
  runtime: "experimental-edge",
};
