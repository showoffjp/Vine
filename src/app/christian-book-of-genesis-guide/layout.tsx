import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Genesis Guide — Christian Study",
  description: "A deep guide to the Book of Genesis — creation and the image of God, the fall and its consequences, Noah and the covenant, Abraham and the promise, Joseph and providence. Covers the literary genre debate, creation vs. evolution, and how Genesis shapes all of Christian theology.",
  openGraph: { title: "Book of Genesis Guide — Vine", description: "A guide to Genesis — creation, the fall, Noah, Abraham, Joseph, and how Genesis shapes all of Christian theology.", images: ["/api/og?title=Book+of+Genesis+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Genesis Guide — Vine", description: "A deep guide to the Book of Genesis.", images: ["/api/og?title=Book+of+Genesis+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
