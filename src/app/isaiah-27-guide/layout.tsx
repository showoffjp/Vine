import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 27 Study Guide | The Vine",
  description: "A deep study of Isaiah 27 -- the conclusion of the Isaiah Apocalypse, featuring the slaying of Leviathan, the restored vineyard, and the great gathering trumpet of God.",
  openGraph: {
    title: "Isaiah 27 Study Guide -- The Vine",
    description: "A deep study of Isaiah 27 -- the conclusion of the Isaiah Apocalypse, featuring the slaying of Leviathan, the restored vineyard, and the great gathering trumpet of God.",
    images: ["/api/og?title=Isaiah+27+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 27 Study Guide -- The Vine",
    description: "A deep study of Isaiah 27 -- the conclusion of the Isaiah Apocalypse, featuring the slaying of Leviathan, the restored vineyard, and the great gathering trumpet of God.",
    images: ["/api/og?title=Isaiah+27+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
