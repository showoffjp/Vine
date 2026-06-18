import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nahum 2 Study Guide &mdash; The Destroyer Has Come Against Nineveh",
  description: "A verse-by-verse guide to Nahum 2 &mdash; the vivid battle poetry of Nineveh's fall, the lion's den emptied, and the LORD restoring the splendor of Jacob as the Assyrian empire collapses.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
