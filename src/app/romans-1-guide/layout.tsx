import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romans 1 Guide - The Gospel and the Righteousness of God - Christian Study",
  description: "A deep study of Romans 1 - Paul's greeting as a servant of Christ Jesus called to be an apostle, his longing to visit Rome, the thesis of the whole letter that in the gospel the righteousness of God is revealed from faith for faith, the wrath of God revealed against all ungodliness, the truth about God made plain through creation so that humanity is without excuse, the great exchange of the glory of God for idols, and the threefold giving up of those who suppress the truth. Explore natural revelation, justification by faith, idolatry as the root of sin, and divine judgment.",
  openGraph: {
    title: "Romans 1 Guide - The Gospel of God - Vine",
    description: "A guide to Romans 1 - the power of God for salvation, the righteousness of God revealed from faith for faith, and the wrath of God against all ungodliness.",
    images: ["/api/og?title=Romans+1+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romans 1 Guide - The Gospel of God - Vine",
    description: "A deep study of Romans 1 - the gospel, the righteousness of God, natural revelation, and the wrath revealed.",
    images: ["/api/og?title=Romans+1+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
