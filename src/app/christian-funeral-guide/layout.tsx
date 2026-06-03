import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Funeral Guide",
  description: "A Christian funeral is not a memorial service — it is an act of worship at the intersection of grief and resurrection hope. Done well, it may be the most powerful hour of pastoral ministry in a per…",
  openGraph: {
    title: "Christian Funeral Guide — Vine",
    description: "A Christian funeral is not a memorial service — it is an act of worship at the intersection of grief and resurrection hope. Done well, it may be the most powerful hour of pastoral ministry in a per…",
    images: ["/api/og?title=Christian+Funeral+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Funeral Guide — Vine",
    description: "A Christian funeral is not a memorial service — it is an act of worship at the intersection of grief and resurrection hope. Done well, it may be the most powerful hour of pastoral ministry in a per…",
    images: ["/api/og?title=Christian+Funeral+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
