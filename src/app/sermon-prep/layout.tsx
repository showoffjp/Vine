import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Preparation",
  description: "Expository preaching takes its shape from the biblical text. The preacher's job is to stand under the text, not over it — to say what God has already said, with the clarity and urgency it deserves.",
  openGraph: {
    title: "Sermon Preparation — Vine",
    description: "Expository preaching takes its shape from the biblical text. The preacher's job is to stand under the text, not over it — to say what God has already said, with the clarity and urgency it deserves.",
    images: ["/api/og?title=Sermon+Preparation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermon Preparation — Vine",
    description: "Expository preaching takes its shape from the biblical text. The preacher's job is to stand under the text, not over it — to say what God has already said, with the clarity and urgency it deserves.",
    images: ["/api/og?title=Sermon+Preparation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
