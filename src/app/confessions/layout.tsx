import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Confessions & Creeds",
  description: "The church's historic confessions and creeds are the accumulated wisdom of Christians wrestling with the most important questions — often under enormous pressure and with eternal stakes.",
  openGraph: {
    title: "Historic Confessions & Creeds — Vine",
    description: "The church's historic confessions and creeds are the accumulated wisdom of Christians wrestling with the most important questions — often under enormous pressure and with eternal stakes.",
    images: ["/api/og?title=Historic+Confessions+%26+Creeds"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Historic Confessions & Creeds — Vine",
    description: "The church's historic confessions and creeds are the accumulated wisdom of Christians wrestling with the most important questions — often under enormous pressure and with eternal stakes.",
    images: ["/api/og?title=Historic+Confessions+%26+Creeds"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
