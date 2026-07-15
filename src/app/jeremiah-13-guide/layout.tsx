import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 13 Guide &mdash; Can the Leopard Change His Spots? &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 13 &mdash; the ruined linen loincloth and Israel made to cling to God, the plea to give glory before darkness falls, and the leopard's spots: why sin demands not reformation but rebirth.",
  openGraph: {
    title: "Jeremiah 13 Guide &mdash; Can the Leopard Change His Spots?",
    description: "Made to cling to God like a garment, ruined by pride &mdash; and unable to change our own spots, we need not reformation but the new heart of the new covenant.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
