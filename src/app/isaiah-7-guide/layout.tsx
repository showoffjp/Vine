import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 7 Chapter Guide – Immanuel, the Virgin Birth Prophecy | The Vine",
  description: "A deep guide to Isaiah 7 — the Immanuel sign given to King Ahaz during the Syro-Ephraimite crisis, God’s call to stand firm in faith, the prophecy of the virgin who shall conceive and name her son Immanuel, the debate about almah and parthenos, and the ultimate fulfillment in the birth of Jesus Christ as quoted in Matthew 1:23.",
  openGraph: { title: "Isaiah 7 Chapter Guide – Immanuel | The Vine", description: "Isaiah 7 explained — the Immanuel sign, the Syro-Ephraimite War, Ahaz’s unbelief, and the virgin birth prophecy fulfilled in Jesus.", images: ["/api/og?title=Isaiah+7+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 7 Chapter Guide | The Vine", description: "A guide to Isaiah 7 — the Immanuel prophecy, the political crisis, and its fulfillment in the birth of Jesus.", images: ["/api/og?title=Isaiah+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
