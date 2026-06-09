import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christology: Who Is Jesus Christ? A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to Christology — the person and work of Christ. Covers the hypostatic union, Christ's two natures, the threefold office (prophet, priest, king), the states of humiliation and exaltation, and the major heresies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
