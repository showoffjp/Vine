import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible & Prayer Apps Guide",
  description: "The apps that help Christians read, study, memorize, and pray — from YouVersion’s 500 million downloads to Logos’s seminary-grade tools. Find the one that fits how you actually work.",
  openGraph: {
    title: "Bible & Prayer Apps Guide — Vine",
    description: "The apps that help Christians read, study, memorize, and pray — from YouVersion’s 500 million downloads to Logos’s seminary-grade tools. Find the one that fits how you actually work.",
    images: ["/api/og?title=Bible+%26+Prayer+Apps+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible & Prayer Apps Guide — Vine",
    description: "The apps that help Christians read, study, memorize, and pray — from YouVersion’s 500 million downloads to Logos’s seminary-grade tools. Find the one that fits how you actually work.",
    images: ["/api/og?title=Bible+%26+Prayer+Apps+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
