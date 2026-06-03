import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Testament Survey",
  description: "27 books spanning the life of Christ, the birth of the church, and the vision of the age to come — written within the first century after the resurrection by eyewitnesses and their companions.",
  openGraph: {
    title: "New Testament Survey — Vine",
    description: "27 books spanning the life of Christ, the birth of the church, and the vision of the age to come — written within the first century after the resurrection by eyewitnesses and their companions.",
    images: ["/api/og?title=New+Testament+Survey"],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Testament Survey — Vine",
    description: "27 books spanning the life of Christ, the birth of the church, and the vision of the age to come — written within the first century after the resurrection by eyewitnesses and their companions.",
    images: ["/api/og?title=New+Testament+Survey"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
