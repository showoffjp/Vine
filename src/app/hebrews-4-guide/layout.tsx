import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hebrews 4 Guide — The Great High Priest — Christian Study",
  description: "A deep study of Hebrews 4 — Jesus as our Great High Priest who has passed through the heavens, the Sabbath rest that still remains for the people of God, and the open invitation to draw near with confidence to the throne of grace, where we find mercy and help in every time of need from a Savior who sympathizes with our weaknesses.",
  openGraph: { title: "Hebrews 4 Guide — The Great High Priest — Vine", description: "Explore Hebrews 4 and the breathtaking invitation to draw near to the throne of grace through Jesus, our sympathizing Great High Priest.", images: ["/api/og?title=Hebrews+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Hebrews 4 Guide — The Great High Priest — Vine", description: "A deep study of Hebrews 4 and Jesus as our sympathizing Great High Priest who opens the throne of grace to every believer.", images: ["/api/og?title=Hebrews+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
