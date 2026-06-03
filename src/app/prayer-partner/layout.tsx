import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Partners",
  description: "Find a prayer partner from anywhere in the world. Pray together, hold each other accountable, and see God move.",
  openGraph: {
    title: "Prayer Partners — Vine",
    description: "Find a prayer partner from anywhere in the world. Pray together, hold each other accountable, and see God move.",
    images: ["/api/og?title=Prayer+Partners"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Partners — Vine",
    description: "Find a prayer partner from anywhere in the world. Pray together, hold each other accountable, and see God move.",
    images: ["/api/og?title=Prayer+Partners"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
