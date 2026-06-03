import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account, notifications, and preferences.",
  openGraph: {
    title: "Settings — Vine",
    description: "Manage your account, notifications, and preferences.",
    images: ["/api/og?title=Settings"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Settings — Vine",
    description: "Manage your account, notifications, and preferences.",
    images: ["/api/og?title=Settings"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
