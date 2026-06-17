import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 19 Study Guide &mdash; Hallelujah and the Return of Christ",
  description: "A verse-by-verse guide to Revelation 19 &mdash; the heavenly Hallelujah chorus, the marriage supper of the Lamb, and the triumphant return of Christ as King of Kings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
