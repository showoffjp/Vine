import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Numbers 14 Guide &mdash; Christian Bible Study",
  description: "A deep guide to Numbers 14 &mdash; the bad report of the ten spies, the rebellion of Israel, the intercession of Moses, and God&rsquo;s decree of forty years in the wilderness. Caleb and Joshua stand firm in faith while the fearful generation is turned back from the Promised Land.",
  openGraph: { title: "Numbers 14 Guide &mdash; Vine", description: "A guide to Numbers 14 &mdash; the spies, the bad report, the rebellion, Moses&rsquo; intercession, and forty years in the wilderness.", images: ["/api/og?title=Numbers+14+Guide"] },
  twitter: { card: "summary_large_image", title: "Numbers 14 Guide &mdash; Vine", description: "A deep guide to Numbers 14 &mdash; the bad report, the grasshopper complex, Caleb and Joshua, and forty years in the wilderness.", images: ["/api/og?title=Numbers+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
