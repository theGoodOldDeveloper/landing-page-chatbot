import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  console.log("Middleware fut:", pathname);

  // Ha nincs nyelvi paraméter az URL-ben, átirányít az /en útvonalra
  if (!pathname.match(/^\/(en|hu|fr|de)(\/|$)/)) {
    console.log("Átirányítás történik:", `/en${pathname}`);
    return NextResponse.redirect(new URL(`/en${pathname}`, req.url));
  }

  return NextResponse.next();
}

// Middleware fusson minden útvonalra, nem csak a gyökérre!
export const config = {
  matcher: "/:path*",
};
