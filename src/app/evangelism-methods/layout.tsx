import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evangelism Methods",
  description: "Every Christian is called to share their faith. There is no single right method — there are many legitimate approaches, each suited to different people, personalities, and contexts.",
  openGraph: {
    title: "Evangelism Methods — Vine",
    description: "Every Christian is called to share their faith. There is no single right method — there are many legitimate approaches, each suited to different people, personalities, and contexts.",
    images: ["/api/og?title=Evangelism+Methods"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evangelism Methods — Vine",
    description: "Every Christian is called to share their faith. There is no single right method — there are many legitimate approaches, each suited to different people, personalities, and contexts.",
    images: ["/api/og?title=Evangelism+Methods"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
