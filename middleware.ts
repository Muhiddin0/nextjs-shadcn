import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(uz|en|fr|de|es|pt|ru|ja|ko|zh)/:path*"],
};
