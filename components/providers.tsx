"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!clerkPublishableKey) {
    return <>{children}</>;
  }

  if (!convexUrl) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }

  const convex = new ConvexReactClient(convexUrl);

  return (
    <ClerkProvider>
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>
    </ClerkProvider>
  );
}
