import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons That Moved History",
  description: "From Edwards in Enfield to Washer in Birmingham — sermons that triggered revivals, shaped theology, and changed millions of lives. These are the messages that have defined Christian preaching acros…",
  openGraph: {
    title: "Sermons That Moved History — Vine",
    description: "From Edwards in Enfield to Washer in Birmingham — sermons that triggered revivals, shaped theology, and changed millions of lives. These are the messages that have defined Christian preaching acros…",
    images: ["/api/og?title=Sermons+That+Moved+History"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermons That Moved History — Vine",
    description: "From Edwards in Enfield to Washer in Birmingham — sermons that triggered revivals, shaped theology, and changed millions of lives. These are the messages that have defined Christian preaching acros…",
    images: ["/api/og?title=Sermons+That+Moved+History"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
