import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Study the Bible | Vine",
  description: "A guide to inductive Bible study — observation, interpretation, and application — with hermeneutics basics, study tools, and methods for engaging Scripture deeply.",
  openGraph: {
    title: "How to Study the Bible | Vine",
    description: "A guide to inductive Bible study — observation, interpretation, and application — with hermeneutics basics, study tools, and methods for engaging Scripture deeply.",
    images: ["/api/og?title=How+to+Study+the+Bible"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Study the Bible | Vine",
    description: "A guide to inductive Bible study — observation, interpretation, and application — with hermeneutics basics, study tools, and methods for engaging Scripture deeply.",
    images: ["/api/og?title=How+to+Study+the+Bible"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
