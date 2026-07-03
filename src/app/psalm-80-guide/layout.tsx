import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 80 Study Guide -- Restore Us, O God; Let Your Face Shine",
  description: "Verse-by-verse study of Psalm 80 -- Asaph's plea for national restoration: the Shepherd of Israel, the vine from Egypt, and the threefold refrain 'Restore us, O God; let your face shine.'",
  openGraph: {
    title: "Psalm 80 Study Guide -- Restore Us, O God; Let Your Face Shine",
    description: "Deep dive into Psalm 80: the vine metaphor for Israel, the refrain of restoration, the prayer for the son of man at God's right hand, and the promise of renewed faithfulness.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
