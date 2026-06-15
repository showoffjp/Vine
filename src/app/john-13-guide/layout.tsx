import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 13 Chapter Guide — Christian Study",
  description: "A deep guide to John 13 — Jesus washing his disciples' feet at the Last Supper, Peter's protest and Jesus's explanation, the revelation of Judas as the betrayer, Satan entering Judas, and the new commandment to love one another as Christ has loved us.",
  openGraph: { title: "John 13 Chapter Guide — Vine", description: "A guide to John 13 — the foot washing, servant leadership, the betrayal of Judas, and the new commandment to love one another.", images: ["/api/og?title=John+13+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "John 13 Chapter Guide — Vine", description: "A deep guide to John 13 — Jesus washes feet, reveals the betrayer, and gives the new commandment.", images: ["/api/og?title=John+13+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
