import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Journal",
  description: "Your personal, private prayer requests. Pray daily, track answered prayers.",
  openGraph: {
    title: "Prayer Journal — Vine",
    description: "Your personal, private prayer requests. Pray daily, track answered prayers.",
    images: ["/api/og?title=Prayer+Journal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Journal — Vine",
    description: "Your personal, private prayer requests. Pray daily, track answered prayers.",
    images: ["/api/og?title=Prayer+Journal"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
