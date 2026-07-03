import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mark 12: Confrontation and Devotion in the Temple - Study Guide | Vine",
  description: "A comprehensive study guide to Mark chapter 12 - the parable of the wicked tenants, render to Caesar, the resurrection, the greatest commandment, David's son, and the widow's two coins.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
