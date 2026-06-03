import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorship",
  description: "Connect with seasoned believers who can walk alongside you in your specific season of faith. Real mentors. Real accountability.",
  openGraph: {
    title: "Mentorship — Vine",
    description: "Connect with seasoned believers who can walk alongside you in your specific season of faith. Real mentors. Real accountability.",
    images: ["/api/og?title=Mentorship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorship — Vine",
    description: "Connect with seasoned believers who can walk alongside you in your specific season of faith. Real mentors. Real accountability.",
    images: ["/api/og?title=Mentorship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
