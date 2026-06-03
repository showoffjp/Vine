import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Grief Guide",
  description: "Grief is not the opposite of faith. It is the cry of faith in the dark. Jesus wept. The Psalter is one-third lament. The cross is God's entry into human suffering. The church that knows how to grie…",
  openGraph: {
    title: "Christian Grief Guide — Vine",
    description: "Grief is not the opposite of faith. It is the cry of faith in the dark. Jesus wept. The Psalter is one-third lament. The cross is God's entry into human suffering. The church that knows how to grie…",
    images: ["/api/og?title=Christian+Grief+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Grief Guide — Vine",
    description: "Grief is not the opposite of faith. It is the cry of faith in the dark. Jesus wept. The Psalter is one-third lament. The cross is God's entry into human suffering. The church that knows how to grie…",
    images: ["/api/og?title=Christian+Grief+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
