import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 Timothy 4 Bible Study Guide &mdash; The Vine",
  description: "A verse-by-verse guide to 1 Timothy 4 &mdash; false asceticism, training for godliness, not despising youth, and the public reading of Scripture.",
  openGraph: {
    title: "1 Timothy 4 Bible Study Guide &mdash; The Vine",
    description: "A verse-by-verse guide to 1 Timothy 4 &mdash; false asceticism, training for godliness, not despising youth, and the public reading of Scripture.",
    images: ["/api/og?title=1+Timothy+4+Bible+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Timothy 4 Bible Study Guide &mdash; The Vine",
    description: "A verse-by-verse guide to 1 Timothy 4 &mdash; false asceticism, training for godliness, not despising youth, and the public reading of Scripture.",
    images: ["/api/og?title=1+Timothy+4+Bible+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
