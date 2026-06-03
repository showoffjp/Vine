import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elder & Deacon Training",
  description: "Biblical qualifications, the elder and deacon offices, a complete training pathway, and recommended resources — everything a church needs to identify, form, and install faithful leaders.",
  openGraph: {
    title: "Elder & Deacon Training — Vine",
    description: "Biblical qualifications, the elder and deacon offices, a complete training pathway, and recommended resources — everything a church needs to identify, form, and install faithful leaders.",
    images: ["/api/og?title=Elder+%26+Deacon+Training"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elder & Deacon Training — Vine",
    description: "Biblical qualifications, the elder and deacon offices, a complete training pathway, and recommended resources — everything a church needs to identify, form, and install faithful leaders.",
    images: ["/api/og?title=Elder+%26+Deacon+Training"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
