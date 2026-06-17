import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 15 Study Guide &mdash; The Song of Moses and the Seven Bowl Angels",
  description: "A verse-by-verse guide to Revelation 15 &mdash; the victorious saints on the sea of glass, the Song of Moses and the Lamb, and the seven angels with the seven last plagues.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
