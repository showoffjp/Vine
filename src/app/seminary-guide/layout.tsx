import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seminary & Theological Education Guide",
  description: "Leading seminaries, degree options, free alternatives, and honest discernment questions for those considering formal theological education.",
  openGraph: {
    title: "Seminary & Theological Education Guide — Vine",
    description: "Leading seminaries, degree options, free alternatives, and honest discernment questions for those considering formal theological education.",
    images: ["/api/og?title=Seminary+%26+Theological+Education+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seminary & Theological Education Guide — Vine",
    description: "Leading seminaries, degree options, free alternatives, and honest discernment questions for those considering formal theological education.",
    images: ["/api/og?title=Seminary+%26+Theological+Education+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
