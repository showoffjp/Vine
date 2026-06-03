import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charismatic Gifts",
  description: "A comprehensive theological resource on the charismata — tongues, prophecy, healing, and the ongoing debate about the Spirit's gifts in the church today.",
  openGraph: {
    title: "Charismatic Gifts — Vine",
    description: "A comprehensive theological resource on the charismata — tongues, prophecy, healing, and the ongoing debate about the Spirit's gifts in the church today.",
    images: ["/api/og?title=Charismatic+Gifts"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charismatic Gifts — Vine",
    description: "A comprehensive theological resource on the charismata — tongues, prophecy, healing, and the ongoing debate about the Spirit's gifts in the church today.",
    images: ["/api/og?title=Charismatic+Gifts"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
