import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Work",
  description: "Work is not a necessary evil — it is a creation gift, a vocation, and a form of worship. Monday is as sacred as Sunday. The question is not whether your work is spiritual, but whether it is done fa…",
  openGraph: {
    title: "Theology of Work — Vine",
    description: "Work is not a necessary evil — it is a creation gift, a vocation, and a form of worship. Monday is as sacred as Sunday. The question is not whether your work is spiritual, but whether it is done fa…",
    images: ["/api/og?title=Theology+of+Work"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Work — Vine",
    description: "Work is not a necessary evil — it is a creation gift, a vocation, and a form of worship. Monday is as sacred as Sunday. The question is not whether your work is spiritual, but whether it is done fa…",
    images: ["/api/og?title=Theology+of+Work"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
