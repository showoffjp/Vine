import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 Kings Chapter 15 Guide — The Vine",
  description: "A comprehensive chapter guide to 1 Kings 15: Abijam, Asa's faithful reforms, the removal of Maacah as queen mother, war with Baasha, the Nadab-Baasha coup, and covenant consequences in the divided kingdom.",
};

export default function Kings15GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
