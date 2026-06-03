import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Progress Dashboard",
  description: "All your Vine activity in one place. Keep growing.",
  openGraph: {
    title: "Your Progress Dashboard — Vine",
    description: "All your Vine activity in one place. Keep growing.",
    images: ["/api/og?title=Your+Progress+Dashboard"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Progress Dashboard — Vine",
    description: "All your Vine activity in one place. Keep growing.",
    images: ["/api/og?title=Your+Progress+Dashboard"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
