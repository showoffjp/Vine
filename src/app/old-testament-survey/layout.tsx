import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Old Testament Survey",
  description: "The Old Testament is not a prelude to the real story — it is the story. 39 books spanning millennia of Israel's life with God, all pointing toward the one in whom their promises find their yes.",
  openGraph: {
    title: "Old Testament Survey — Vine",
    description: "The Old Testament is not a prelude to the real story — it is the story. 39 books spanning millennia of Israel's life with God, all pointing toward the one in whom their promises find their yes.",
    images: ["/api/og?title=Old+Testament+Survey"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Testament Survey — Vine",
    description: "The Old Testament is not a prelude to the real story — it is the story. 39 books spanning millennia of Israel's life with God, all pointing toward the one in whom their promises find their yes.",
    images: ["/api/og?title=Old+Testament+Survey"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
