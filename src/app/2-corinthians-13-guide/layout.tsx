import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2 Corinthians 13 Study Guide &mdash; The Vine",
  description: "A comprehensive Bible study guide to 2 Corinthians 13 &mdash; the conclusion of Paul&rsquo;s most personal letter. Covers Paul&rsquo;s third visit warning, the self-examination test, the paradox of Christ crucified in weakness but living by power, and the famous Trinitarian benediction.",
  openGraph: {
    title: "2 Corinthians 13 Study Guide &mdash; The Vine",
    description: "The conclusion of Paul's most personal letter -- the self-examination test, weakness and power, and the Trinitarian benediction.",
    images: ["/api/og?title=2+Corinthians+13+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Corinthians 13 Study Guide &mdash; The Vine",
    description: "The conclusion of Paul's most personal letter -- the self-examination test, weakness and power, and the Trinitarian benediction.",
    images: ["/api/og?title=2+Corinthians+13+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
