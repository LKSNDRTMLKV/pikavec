import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { CustomMiddleware } from "@/middlewares/chain";

export default function CookieExampleMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    if (pathname.indexOf("icon") > -1 || pathname.indexOf("chrome") > -1) {
      return NextResponse.next();
    }

    // The first middleware in the chain has to create the response object and pass it down the chain
    const response = NextResponse.next();

    // Perform whatever logic the first middleware needs to do
    // const url = request.url
    // request.cookies.set('CookieExample', 'true')

    // Call the next middleware and pass the request and response
    return middleware(request, event, response);
  };
}
