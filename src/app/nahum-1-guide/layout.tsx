import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nahum 1 Study Guide &mdash; The LORD Is a Jealous and Avenging God",
  description: "A verse-by-verse guide to Nahum 1 &mdash; the avenging jealousy of the LORD, the theophanic power of God over all creation, and the good news for Judah that the Assyrian oppressor will be cut off.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
