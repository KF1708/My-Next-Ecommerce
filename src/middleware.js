import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  //config is an object that configures the behavior of the middleware, specifically defining the matching rules for when the middleware should be applied and when it should be skipped.
  matcher: [
    //matcher config defines when the middleware should be applied

    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes and tRPC routes
    "/(api|trpc)(.*)",
  ],
};
