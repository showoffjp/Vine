import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stewardship & Finances",
  description: "Biblical wisdom for managing money, debt, and generosity",
  openGraph: {
    title: "Stewardship & Finances — Vine",
    description: "Biblical wisdom for managing money, debt, and generosity",
    images: ["/api/og?title=Stewardship+%26+Finances"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stewardship & Finances — Vine",
    description: "Biblical wisdom for managing money, debt, and generosity",
    images: ["/api/og?title=Stewardship+%26+Finances"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
