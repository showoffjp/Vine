import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Missionaries & Their Stories",
  description: "The men and women of the last 100 years who left comfort behind to bring the gospel to the ends of the earth. Their lives are evidence that the mission of God is still moving.",
  openGraph: {
    title: "Modern Missionaries & Their Stories — Vine",
    description: "The men and women of the last 100 years who left comfort behind to bring the gospel to the ends of the earth. Their lives are evidence that the mission of God is still moving.",
    images: ["/api/og?title=Modern+Missionaries+%26+Their+Stories"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Missionaries & Their Stories — Vine",
    description: "The men and women of the last 100 years who left comfort behind to bring the gospel to the ends of the earth. Their lives are evidence that the mission of God is still moving.",
    images: ["/api/og?title=Modern+Missionaries+%26+Their+Stories"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
