import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Missions Guide | Vine",
  description:
    "A comprehensive guide to Christian missions — the missio Dei, the call to all nations from Genesis 12, Paul's strategy for unreached peoples, contextualization of the gospel, short-term vs. long-term missions, and tentmaking as mission.",
  openGraph: {
    title: "Christian Missions Guide | Vine",
    description:
      "A comprehensive guide to Christian missions — the missio Dei, the call to all nations from Genesis 12, Paul's strategy for unreached peoples, contextualization of the gospel, short-term vs. long-term missions, and tentmaking as mission.",
    images: ["/api/og?title=Christian+Missions+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Missions Guide | Vine",
    description:
      "A comprehensive guide to Christian missions — the missio Dei, the call to all nations from Genesis 12, Paul's strategy for unreached peoples, contextualization of the gospel, short-term vs. long-term missions, and tentmaking as mission.",
    images: ["/api/og?title=Christian+Missions+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
