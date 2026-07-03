import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 14: The 144,000 on Mount Zion, Three Angel Messages, and the Harvest | Vine",
  description:
    "A detailed study guide to Revelation 14 -- the 144,000 on Mount Zion, the three angel messages (eternal gospel, fallen Babylon, warning against the beast's mark), patient endurance of the saints, and the grain and grape harvests of the earth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
