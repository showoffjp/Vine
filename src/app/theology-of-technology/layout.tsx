import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Christian Theology of Technology",
  description: "Technology is not neutral. Every tool shapes the person who uses it. A Christian theology of technology asks: What is technology doing to us? How do we use it without being used by it?",
  openGraph: {
    title: "A Christian Theology of Technology — Vine",
    description: "Technology is not neutral. Every tool shapes the person who uses it. A Christian theology of technology asks: What is technology doing to us? How do we use it without being used by it?",
    images: ["/api/og?title=A+Christian+Theology+of+Technology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Christian Theology of Technology — Vine",
    description: "Technology is not neutral. Every tool shapes the person who uses it. A Christian theology of technology asks: What is technology doing to us? How do we use it without being used by it?",
    images: ["/api/og?title=A+Christian+Theology+of+Technology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
