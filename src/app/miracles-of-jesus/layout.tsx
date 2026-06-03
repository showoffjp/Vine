import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Miracles of Jesus",
  description: "Signs and wonders that broke into a broken world — healing the sick, stilling the storm, casting out darkness, and raising the dead. Each miracle is a window into the identity of Jesus and a foreta…",
  openGraph: {
    title: "The Miracles of Jesus — Vine",
    description: "Signs and wonders that broke into a broken world — healing the sick, stilling the storm, casting out darkness, and raising the dead. Each miracle is a window into the identity of Jesus and a foreta…",
    images: ["/api/og?title=The+Miracles+of+Jesus"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Miracles of Jesus — Vine",
    description: "Signs and wonders that broke into a broken world — healing the sick, stilling the storm, casting out darkness, and raising the dead. Each miracle is a window into the identity of Jesus and a foreta…",
    images: ["/api/og?title=The+Miracles+of+Jesus"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
