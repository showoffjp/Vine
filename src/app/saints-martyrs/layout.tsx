import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saints & Martyrs",
  description: "Two thousand years of faithful witnesses — those who lived for Christ and those who died for him. Their stories are the Church's memory and the believer's encouragement.",
  openGraph: {
    title: "Saints & Martyrs — Vine",
    description: "Two thousand years of faithful witnesses — those who lived for Christ and those who died for him. Their stories are the Church's memory and the believer's encouragement.",
    images: ["/api/og?title=Saints+%26+Martyrs"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saints & Martyrs — Vine",
    description: "Two thousand years of faithful witnesses — those who lived for Christ and those who died for him. Their stories are the Church's memory and the believer's encouragement.",
    images: ["/api/og?title=Saints+%26+Martyrs"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
