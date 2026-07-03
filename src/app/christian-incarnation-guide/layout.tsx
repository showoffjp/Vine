import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Incarnation Guide",
  description:
    "The mystery of the Incarnation — fully God and fully human (Chalcedon), the kenosis of Philippians 2, the virgin birth, the eternal Son taking on flesh, why the Incarnation matters for salvation, ethics, and hope.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
