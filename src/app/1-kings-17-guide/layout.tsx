import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 17 Guide — Christian Study",
  description: "A deep guide to 1 Kings 17 — Elijah before Ahab declaring drought, ravens feeding him at brook Cherith, the widow of Zarephath whose jar of flour and jug of oil did not run out, and the resurrection of her son. The word of the Lord in Elijah's mouth is truth.",
  openGraph: { title: "1 Kings 17 Guide — Vine", description: "A guide to 1 Kings 17 — Elijah, the brook Cherith, the widow of Zarephath, and the son raised to life.", images: ["/api/og?title=1+Kings+17+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 17 Guide — Vine", description: "A deep guide to 1 Kings 17 — Elijah, Zarephath, and resurrection.", images: ["/api/og?title=1+Kings+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
