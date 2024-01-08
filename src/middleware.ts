import createMiddleware from 'next-intl/middleware';
import {LOCALES} from './LOCALES';
import {localePrefix} from './navigation';
export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,
  localePrefix,
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ua|en|pl)/:path*']
};