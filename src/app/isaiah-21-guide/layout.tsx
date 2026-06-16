import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isaiah 21: The Burden of Babylon, Dumah, and Arabia | Vine",
  description: "A verse-by-verse study of Isaiah 21 -- the Wilderness of the Sea oracle, the Watchman vision, Fallen is Babylon, and the Arabian judgment. Themes, application, and teaching videos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
