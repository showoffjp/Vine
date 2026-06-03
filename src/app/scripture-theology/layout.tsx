import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Scripture",
  description: "What is the Bible? Where does its authority come from? How should it be interpreted? The foundational doctrines of inspiration, inerrancy, authority, and hermeneutics, and the debates that still di…",
  openGraph: {
    title: "Theology of Scripture — Vine",
    description: "What is the Bible? Where does its authority come from? How should it be interpreted? The foundational doctrines of inspiration, inerrancy, authority, and hermeneutics, and the debates that still di…",
    images: ["/api/og?title=Theology+of+Scripture"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Scripture — Vine",
    description: "What is the Bible? Where does its authority come from? How should it be interpreted? The foundational doctrines of inspiration, inerrancy, authority, and hermeneutics, and the debates that still di…",
    images: ["/api/og?title=Theology+of+Scripture"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
