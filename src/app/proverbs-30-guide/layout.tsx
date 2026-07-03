import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 30 Study Guide | The Vine",
  description: "A deep study of Proverbs 30 -- the words of Agur son of Jakeh, featuring the confession of ignorance before God, the perfection of God's word, and the four sets of four things.",
  openGraph: {
    title: "Proverbs 30 Study Guide -- The Vine",
    description: "A deep study of Proverbs 30 -- the words of Agur son of Jakeh, featuring the confession of ignorance before God, the perfection of God's word, and the four sets of four things.",
    images: ["/api/og?title=Proverbs+30+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 30 Study Guide -- The Vine",
    description: "A deep study of Proverbs 30 -- the words of Agur son of Jakeh, featuring the confession of ignorance before God, the perfection of God's word, and the four sets of four things.",
    images: ["/api/og?title=Proverbs+30+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
