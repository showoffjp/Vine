import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah Chapter 15 Guide - The Vine",
  description: "A comprehensive chapter guide to Isaiah 15: the oracle concerning Moab - the sudden overnight destruction of Ar and Kir, the nationwide mourning at the high places, the cry that echoes from Heshbon to Jahaz, the prophet's own heart crying out for Moab, the desolate waters of Nimrim, and the lion that awaits the survivors of Dimon.",
};

export default function Isaiah15GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
