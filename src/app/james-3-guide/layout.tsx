import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "James 3: The Power and Peril of the Tongue, and Wisdom from Above | Vine",
  description:
    "A verse-by-verse study guide to James 3 covering the tongue as fire and rudder, the impossibility of taming it, the two kinds of wisdom (earthly vs. heavenly), and the call to be peacemakers who sow righteousness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
