import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 26 -- The Song of the Strong City | The Vine",
  description: "A deep study guide to Isaiah 26 -- the song of the strong city, perfect peace, the everlasting Rock, and the resurrection hope. Part of the Isaiah Apocalypse (chapters 24-27).",
  openGraph: {
    title: "Isaiah 26 -- The Song of the Strong City | The Vine",
    description: "A deep study guide to Isaiah 26 -- the song of the strong city, perfect peace, the everlasting Rock, and the resurrection hope.",
    images: ["/api/og?title=Isaiah+26+%E2%80%94+The+Song+of+the+Strong+City"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 26 -- The Song of the Strong City | The Vine",
    description: "A deep study guide to Isaiah 26 -- the song of the strong city, perfect peace, the everlasting Rock, and the resurrection hope.",
    images: ["/api/og?title=Isaiah+26+%E2%80%94+The+Song+of+the+Strong+City"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
