import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Proverbs 14 Guide - Christian Study",
  description: "A deep guide to Proverbs 14 - wisdom builds, folly tears down: the wise woman who builds her house, the way that seems right but ends in death, the ache hidden in laughter, discernment versus naivety, the tranquil heart and the rot of envy, honoring the Maker by caring for the poor, slowness to anger, and the righteousness that exalts a nation.",
  openGraph: { title: "Proverbs 14 Guide - Vine", description: "A guide to Proverbs 14 - antithetical wisdom on building the home, the deceptive way that seems right, emotional health, and the fear of the LORD as a fountain of life.", images: ["/api/og?title=Proverbs+14+Guide"] },
  twitter: { card: "summary_large_image", title: "Proverbs 14 Guide - Vine", description: "A deep guide to Proverbs 14, wisdom builds and folly tears down.", images: ["/api/og?title=Proverbs+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
