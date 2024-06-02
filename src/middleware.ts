import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
  localeDetection: AppConfig.localeDetection,
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
]);

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  console.log(request.nextUrl);
  // I want to customize the locale cookie
  // when use access without locale in pathname, I want to use locale in cookie
  // when use access with locale in pathname, I want to use locale in pathname, and set it to cookie
  // const pathParts = request.nextUrl.pathname.split('/');
  // let localeRoute = pathParts[1] || AppConfig.defaultLocale;

  // if (
  //   localeRoute !== '' &&
  //   localeRoute !== AppConfig.defaultLocale &&
  //   !AppConfig.locales.includes(localeRoute)
  // ) {
  //   localeRoute = AppConfig.defaultLocale;
  // }
  // const cookieStore = cookies();
  // if (localeRoute !== cookieStore.get('locale')?.value) {
  //   cookieStore.set('locale', localeRoute);
  // }

  // const cookieStore = cookies();
  // const locale = cookieStore.get('locale')?.value ?? AppConfig.defaultLocale;
  // if (AppConfig.locales.includes(locale)) {
  //   // Set the locale cookie
  //   cookieStore.set('locale', locale);
  // }

  // Run Clerk middleware only when it's necessary
  if (
    request.nextUrl.pathname.includes('/sign-in') ||
    request.nextUrl.pathname.includes('/sign-up') ||
    isProtectedRoute(request)
  ) {
    return clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) {
        const locale =
          req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';

        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        auth().protect({
          // `unauthenticatedUrl` is needed to avoid error: "Unable to find `next-intl` locale because the middleware didn't run on this request"
          unauthenticatedUrl: signInUrl.toString(),
        });
      }

      return intlMiddleware(req);
    })(request, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
