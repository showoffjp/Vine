import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You Are Not Alone",
  description: "This is a safe, judgment-free space where faith and mental health meet with honesty, compassion, and real resources.",
  openGraph: {
    title: "You Are Not Alone — Vine",
    description: "This is a safe, judgment-free space where faith and mental health meet with honesty, compassion, and real resources.",
    images: ["/api/og?title=You+Are+Not+Alone"],
  },
  twitter: {
    card: "summary_large_image",
    title: "You Are Not Alone — Vine",
    description: "This is a safe, judgment-free space where faith and mental health meet with honesty, compassion, and real resources.",
    images: ["/api/og?title=You+Are+Not+Alone"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
