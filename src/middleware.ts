import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "he"];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = "en";
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), api routes, and static files (e.g. .png, .jpg, .svg, etc.)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
