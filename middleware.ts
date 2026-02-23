import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  // Skip Next.js internals and static files
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|gif|webp|svg|css|js|woff|woff2|ttf)$/)
  ) {
    return NextResponse.next()
  }

  // Route luxewindowworks.com traffic to /luxe/* internal paths
  if (hostname.includes('luxewindowworks')) {
    const url = request.nextUrl.clone()
    // /  → /luxe
    // /contact → /luxe/contact
    // /products/cellular-shades → /luxe/products/cellular-shades
    url.pathname = `/luxe${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
