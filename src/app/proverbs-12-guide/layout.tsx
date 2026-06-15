import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs 12 Guide - The Roots of the Righteous",
  description: "A deep guide to Proverbs 12 - a gallery of contrasts between wisdom and folly. Whoever loves discipline loves knowledge; the root of the righteous will never be moved; the tongue of the wise brings healing; truthful lips endure forever; and in the path of righteousness is life.",
  openGraph: { title: "Proverbs 12 Guide - Vine", description: "A guide to the Roots of the Righteous - the love of correction, the rootedness of the righteous, the power of the tongue, and the path of life.", images: ["/api/og?title=Proverbs+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 12 Guide - Vine", description: "A deep guide to Proverbs 12, the Roots of the Righteous.", images: ["/api/og?title=Proverbs+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
