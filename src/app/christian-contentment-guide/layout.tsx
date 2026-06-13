import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Contentment",
  description: "Contentment and the Christian faith - the secret Paul learned, contentment in plenty and want, the danger of covetousness and comparison, godliness with contentment as great gain, gratitude as a discipline, and finding satisfaction in God alone.",
  openGraph: { title: "Christian Guide to Contentment - Vine", description: "Contentment and faith - Pauls secret, the danger of covetousness, godliness with contentment, gratitude, and satisfaction in God.", images: ["/api/og?title=Christian+Contentment"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Contentment - Vine", description: "Contentment and the Christian faith.", images: ["/api/og?title=Christian+Contentment"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
