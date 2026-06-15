import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 John 2 Chapter Guide – Advocate, Antichrist, Abide in Christ | The Vine",
  description: "A deep guide to 1 John 2 — Christ as our advocate and propitiation, the new commandment to love, the warning against loving the world, the antichrist spirit in false teachers who denied the Son, and the call to abide in what was heard from the beginning through the Spirit's anointing.",
  openGraph: { title: "1 John 2 Chapter Guide – The Vine", description: "Christ our advocate, the new commandment, do not love the world, and the antichrist warning in 1 John 2.", images: ["/api/og?title=1+John+2+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 John 2 Chapter Guide – The Vine", description: "A guide to 1 John 2 — advocate, antichrist, and abiding in Christ.", images: ["/api/og?title=1+John+2+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
