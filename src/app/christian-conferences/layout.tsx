import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Major Christian Conferences",
  description: "The conferences that are shaping evangelical Christianity — from Reformed theology to charismatic renewal, global missions to youth revival. Find your tribe and go deeper.",
  openGraph: {
    title: "Major Christian Conferences — Vine",
    description: "The conferences that are shaping evangelical Christianity — from Reformed theology to charismatic renewal, global missions to youth revival. Find your tribe and go deeper.",
    images: ["/api/og?title=Major+Christian+Conferences"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Major Christian Conferences — Vine",
    description: "The conferences that are shaping evangelical Christianity — from Reformed theology to charismatic renewal, global missions to youth revival. Find your tribe and go deeper.",
    images: ["/api/og?title=Major+Christian+Conferences"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
