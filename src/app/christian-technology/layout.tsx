import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith in the Digital Age — Vine",
  description: "Smartphones, social media, AI, and embodied faith. A theological and practical guide to Christian discipleship in the digital age — attention, digital sabbath, the imago Dei, and redeeming technology for the kingdom.",
  openGraph: {
    title: "Faith in the Digital Age — Vine",
    description: "Smartphones, social media, AI, and embodied faith. A theological and practical guide to Christian discipleship in the digital age — attention, digital sabbath, the imago Dei, and redeeming technology for the kingdom.",
    images: ["/api/og?title=Faith+in+the+Digital+Age"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith in the Digital Age — Vine",
    description: "Smartphones, social media, AI, and embodied faith. A theological and practical guide to Christian discipleship in the digital age — attention, digital sabbath, the imago Dei, and redeeming technology for the kingdom.",
    images: ["/api/og?title=Faith+in+the+Digital+Age"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
